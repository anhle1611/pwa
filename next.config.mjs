/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';

const config = withPWA({
  dest: 'public', // Thư mục chứa service worker và các tệp cache
  register: true, // Tự động đăng ký Service Worker
  skipWaiting: true, // Kích hoạt Service Worker ngay lập tức khi có bản cập nhật
});

const nextConfig = config({
  // Các cấu hình Next.js khác
  reactStrictMode: true,
});

export default nextConfig;
