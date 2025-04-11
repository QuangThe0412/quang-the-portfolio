# Sử dụng Node.js làm base image
FROM node:18-alpine AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Sao chép file package.json và package-lock.json vào container
COPY package.json package-lock.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Build ứng dụng React
RUN npm run build

# Sử dụng Nginx để phục vụ ứng dụng React
FROM nginx:stable-alpine

# Sao chép build output từ bước trước vào thư mục Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Sao chép file cấu hình Nginx tùy chỉnh (nếu cần)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose cổng 80
EXPOSE 80

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]