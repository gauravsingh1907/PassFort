import { useState, useEffect } from "react";
import { RiFunctionAddFill, RiEdit2Line } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaCopy } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([])
  const [editId, setEditId] = useState(null);
  const [visibleId, setVisibleId] = useState(null);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }
  }, [])


  const copybutton = (text) => {
    toast.success('Copied successfully!', {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",

    });
    navigator.clipboard.writeText(text)
  }



  const savePasswords = () => {
    if (Object.values(form).some(value => value.trim() === "")) {
      toast.error("All fields are required!");
      return;
    }

      let site = form.site;
  if (!site.startsWith("http://") && !site.startsWith("https://")) {
    site = `https://${site}`;
  }

  console.log("Normalized URL:", site); // ✅ check he
    if (editId) {
      const updated = passwordArray.map(item =>
        item.id === editId ? { ...form, site, id: editId } : item);


      setPasswordArray(updated);
      localStorage.setItem("passwords", JSON.stringify(updated));
      setEditId(null);
      toast.success('Edited Successfully!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
    else {

      const id = uuidv4();
      setPasswordArray([...passwordArray, { ...form, site, id }])
      localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, site, id }]))
      toast.success('Saved Successfully!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }

    setform({ site: "", username: "", password: "" });
  };







  const deletePassword = (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete == true) {

      setPasswordArray(passwordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
      toast.success('Deleted successfully!', {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",

      });
    }
  };






  const editPassword = (id) => {
    const item = passwordArray.find(item => item.id === id);

    setform({
      site: item.site,
      username: item.username,
      password: item.password
    });

    setEditId(id);
  };








  const showingpassword = () => {
    setShowPassword((prev) => !prev);
  };







  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };









  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <div className=" max-w-7xl mx-auto mt-20 p-6 space-y-4">
        {/* title */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-mono font-bold text-white">
            <span className="text-violet-400">&lt;</span>
            Pass
            <span className="text-violet-400">Fort</span>
            <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
              /&gt;
            </span>
          </h1>

          <p className="text-gray-400 text-sm tracking-wide">
            Secure your password forever
          </p>
        </div>

        <input
          value={form.site}
          onChange={handlechange}
          type="text"
          name="site"
          placeholder="Enter Website URL"
          className="w-full px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
        />

        <div className="flex flex-col md:flex-row gap-4">
          <input
            value={form.username}
            onChange={handlechange}
            type="text"
            name="username"
            placeholder="Enter Username"
            className="flex-1 px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <div className="relative">
            <input
              value={form.password}
              onChange={handlechange}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              className="w-full md:w-72  px-4 py-2 rounded-md bg-white/5 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
              onClick={showingpassword}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
        </div>

        <button
          onClick={savePasswords}
          className=" flex gap-2 justify-center items-center mx-auto px-6 py-2 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 hover:cursor-pointer transition duration-300"
        >
          <RiFunctionAddFill />
          Save
        </button>
        <div className="passwords max-w-7xl mx-auto mt-10 p-6 bg-black/40 backdrop-blur-lg rounded-xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Your Passwords</h2>
          {passwordArray.length === 0 && <div className="text-white text-lg text-center p-4"> No Passwords Saved </div>}
          {passwordArray.length !== 0 &&
            <div className="overflow-x-auto rounded-lg">
              <table className="table-auto w-full text-xs md:text-lg border-collapse">
                <thead>
                  <tr className="bg-white/10">
                    <th className="px-4 py-2 text-gray-200 text-center min-w-32">Website</th>
                    <th className="px-4 py-2 text-gray-200 text-center min-w-32">Username</th>
                    <th className="px-4 py-2 text-gray-200 text-center min-w-32">Password</th>
                    <th className="px-4 py-2 text-gray-200 text-center min-w-32">Action</th>
                  </tr>
                </thead>
                <tbody>

                  {passwordArray.map((item) => {
                    return <tr key={item.id} className="border-t border-white/10 hover:bg-white/5 transition">
                      <td className="px-4 py-2 text-white text-center">
                        <div className="flex items-center justify-center gap-2.5">
                          <a href={item.site} target="_blank" rel="noopener noreferrer">{item.site}</a>
                          <div className="cursor-pointer transition hover:scale-110 active:scale-90" onClick={() => { copybutton(item.site) }}><FaCopy /></div>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-white text-center">
                        <div className="flex items-center justify-center gap-2.5">
                          {item.username}
                          <div className="cursor-pointer transition hover:scale-110 active:scale-90" onClick={() => { copybutton(item.username) }}><FaCopy /></div>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-white text-center">
                        <div className="flex items-center justify-center gap-2.5">
                          {visibleId === item.id ? item.password : "•".repeat(item.password.length)}

                          <span
                            className="cursor-pointer"
                            onClick={() =>
                              setVisibleId(visibleId === item.id ? null : item.id)
                            }
                          >
                            {visibleId === item.id ? <IoEyeOff /> : <IoEye />}
                          </span>

                          <div
                            className="cursor-pointer transition hover:scale-110 active:scale-90"
                            onClick={() => copybutton(item.password)}
                          >
                            <FaCopy />
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-white text-center">
                        <div className="flex justify-center gap-4 text-xl">
                          <span className="cursor-pointer transition hover:scale-110 active:scale-90" onClick={() => { editPassword(item.id) }}><RiEdit2Line /></span>
                          <span className="cursor-pointer transition hover:scale-110 active:scale-90" onClick={() => { deletePassword(item.id) }}><MdOutlineDelete /></span>
                        </div>
                      </td>
                    </tr>
                  })}

                </tbody>
              </table>
            </div>}
        </div>

      </div>
    </>
  );
};

export default Manager;
