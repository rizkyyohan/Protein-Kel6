import React, { useState } from 'react';

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    gender: 'Laki-Laki',
    disabilities: ['Intelektual', 'Sensorik'],
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddDisability = () => {
    const newDisability = prompt('Masukkan jenis disabilitas:');
    if (newDisability) {
      setFormData({ ...formData, disabilities: [...formData.disabilities, newDisability] });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profil disimpan:', formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Alamat</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-gray-700">No. Handphone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700">Jenis Kelamin</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
              >
                <option value="Laki-Laki">Laki-Laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Disabilitas</label>
            <div className="flex space-x-2">
              {formData.disabilities.map((disability, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {disability}
                </span>
              ))}
              <button
                type="button"
                onClick={handleAddDisability}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              >
                +
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
