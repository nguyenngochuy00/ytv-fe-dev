#🚀 Công nghệ sử dụng

- Next.js 15/16 (Latest): Sử dụng App Router và Turbopack cho tốc độ tối ưu.
- TypeScript: Cấu hình nghiêm ngặt để đảm bảo an toàn về kiểu dữ liệu.
- Tailwind CSS v4: Framework CSS mới nhất cho giao diện linh hoạt.
- TanStack Query (React Query): Quản lý state và caching dữ liệu từ server.
- Zustand: Quản lý Global State một cách nhẹ nhàng.
- JWT Auth: Hệ thống xác thực sử dụng JWT với jose (Edge-compatible) và Next.js Middleware.
- Shadcn/ui: Đã cài đặt và tích hợp các component cơ bản (Button, Input, Card, Form).

📂 Cấu trúc dự án nổi bật

- src/lib/auth.ts
  : Xử lý Encrypt/Decrypt JWT và quản lý Session qua Cookies.
- src/middleware.ts
  : Bảo vệ các route (/dashboard, /profile) yêu cầu đăng nhập.
- src/lib/store.ts
  : Zustand store quản lý trạng thái User và Token phía client.
- src/lib/react-query-provider.tsx
  : Client Provider cung cấp QueryClient cho toàn app.
- src/app/login/page.tsx
  : Giao diện đăng nhập hoàn chỉnh với Shadcn logic.
- src/app/api/auth/login: API handler xử lý đăng nhập và thiết lập Session.
