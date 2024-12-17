import React, { useState } from "react";

const EditPemandu = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [skills, setSkills] = useState([]);

  const skillOptions = ["Atletis", "Isyarat", "Komunikasi", "Romusa"];

  const handleAddSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  const isValidEmail = email.match(/^[a-zA-Z0-9._%+-]+@gmail\.com$/);
  const isValidPassword = password.length >= 8;

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-black">Edit Profile</h1>

      <form>
        {/* Nama Lengkap */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Nama Lengkap</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#242277]"
          />
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#242277]"
          />
          {isValidEmail && (
            <span className="absolute right-3 top-10 text-green-500">✔</span>
          )}
        </div>

        {/* Alamat */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Alamat</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#242277]"
          />
        </div>

        {/* No. Handphone dan Jenis Kelamin */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-medium">
              No. Handphone
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#242277]"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Jenis Kelamin</label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#242277]">
              <option value="Perempuan">Perempuan</option>
              <option value="Laki-Laki">Laki-Laki</option>
            </select>
          </div>
        </div>

        {/* Keahlian */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Keahlian</label>
          <div className="flex items-center space-x-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-[#e0e0f7] text-[#242277] px-3 py-1 rounded-full flex items-center space-x-2"
              >
                <span>{skill}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveSkill(skill)}
                  className="text-[#242277] font-bold hover:text-black"
                >
                  x
                </button>
              </span>
            ))}
            <button
              type="button"
              onClick={() =>
                handleAddSkill(skillOptions[skills.length % skillOptions.length])
              }
              className="bg-[#242277] text-white px-3 py-1 rounded-full hover:bg-[#1c1f5c]"
            >
              +
            </button>
          </div>
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#242277]"
          />
          {isValidPassword && (
            <span className="absolute right-3 top-10 text-green-500">✔</span>
          )}
        </div>

        {/* Tombol */}
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-white border border-[#242277] text-[#242277] rounded-md hover:bg-[#242277] hover:text-white"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-white border border-[#242277] text-[#242277] rounded-md hover:bg-[#242277] hover:text-white"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPemandu;
