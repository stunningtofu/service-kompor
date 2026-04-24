#!/bin/bash

# Menampilkan pesan awal proses
echo "Memulai pembuatan struktur proyek..."

# Membuat direktori yang diperlukan
# Opsi -p memastikan tidak ada error jika direktori sudah ada
mkdir -p components pages styles public

# Membuat file konfigurasi dan dependensi
touch Dockerfile docker-compose.yml next.config.js package.json

# Menambahkan template dasar untuk package.json agar format JSON valid (Opsional)
echo '{
  "name": "my-project",
  "version": "1.0.0",
  "private": true
}' > package.json

# Menampilkan pesan keberhasilan
echo "Struktur direktori dan file berhasil dibuat:"
ls -la
