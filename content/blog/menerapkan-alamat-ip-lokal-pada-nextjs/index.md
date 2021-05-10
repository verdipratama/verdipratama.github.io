---
title: "Cara Deploy Menggunakan Alamat Ip Lokal pada Aplikasi Next.js"
subtitle: Langkah - langkah menjalankan next.js pada ip lokal
date: "2021-05-10T00:00:00.284Z"
description: Terkadang, saat membangun aplikasi yang responsif sangat penting untuk dapat menguji di perangkat seluler dan perangkat lain secara real-time. Berikut cara menerapkan alamat ip lokal pada next js maupun react framework lainnya.
---

Terkadang, saat membangun aplikasi yang responsif, sangatlah penting untuk dapat menguji di perangkat seluler dan perangkat lain secara real-time. begitupun dengan create-react-app dalam melakukan hal ini, selanjutnya kita perlu mengikuti beberapa langkah.

(Penting untuk dicatat bahwa agar ini berfungsi, semua perangkat yang ingin Anda uji harus terhubung ke jaringan yang sama.)

> Buka terminal Anda dan jalankan perintah ipconfig untuk windows atau ifconfig untuk MacBooks. Anda akan melihat jaringan yang saat ini Anda sambungkan, alamat IPv4 adalah alamat IP lokal saat ini.

Sekarang untuk penerapannya.

Di terminal Anda, jalankan yarn dev -H [alamat IP Anda] atau npm jalankan dev -H [alamat IP Anda]. Misalnya, yarn dev -H 192.168.1.9. Ini membuat server dengan aplikasi Anda dihosting di alamat IP lokal Anda dan tautan muncul di terminal Anda menggunakan port default 3000, atau port apa pun yang Anda konfigurasikan untuk menjalankan aplikasi Anda.

Tautan itu kemudian dapat digunakan di perangkat apa pun, dan setiap perubahan yang Anda buat pada aplikasi Anda akan diperbarui secara real-time.

Selamat Mencoba!
