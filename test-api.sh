#!/bin/bash

# API Testing Script
BASE_URL="http://localhost:8888/api/v1"

echo "🚀 Testing Oracle Backend APIs"
echo "================================"

echo -e "\n📁 1. Creating Categories..."
curl -s -X POST $BASE_URL/categories \
  -H "Content-Type: application/json" \
  -d '{"categoryName":"Electronics","description":"Electronic devices"}' | grep -o '"categoryId":[0-9]*'

curl -s -X POST $BASE_URL/categories \
  -H "Content-Type: application/json" \
  -d '{"categoryName":"Books","description":"Books and magazines"}' | grep -o '"categoryId":[0-9]*'

echo -e "\n\n📦 2. Creating Products..."
curl -s -X POST $BASE_URL/products \
  -H "Content-Type: application/json" \
  -d '{"productName":"Laptop Dell XPS","price":25000000,"quantity":10,"categoryId":1}' | grep -o '"productId":[0-9]*'

curl -s -X POST $BASE_URL/products \
  -H "Content-Type: application/json" \
  -d '{"productName":"iPhone 15 Pro","price":30000000,"quantity":5,"categoryId":1}' | grep -o '"productId":[0-9]*'

echo -e "\n\n👔 3. Creating Employees..."
curl -s -X POST $BASE_URL/employees \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Nguyen Van A","position":"Sales Manager","salary":15000000,"phone":"0901234567"}' | grep -o '"employeeId":[0-9]*'

echo -e "\n\n👥 4. Creating Customers..."
curl -s -X POST $BASE_URL/customers \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Tran Thi B","phone":"0912345678","email":"tranb@email.com","address":"HCMC"}' | grep -o '"customerId":[0-9]*'

echo -e "\n\n📝 5. Creating Order..."
curl -s -X POST $BASE_URL/orders \
  -H "Content-Type: application/json" \
  -d '{"orderDate":"2025-11-25","customerId":1,"employeeId":1,"totalAmount":55000000}' | grep -o '"orderId":[0-9]*'

echo -e "\n\n📋 6. Creating Order Details..."
curl -s -X POST $BASE_URL/order-details \
  -H "Content-Type: application/json" \
  -d '{"orderId":1,"productId":1,"quantity":1,"unitPrice":25000000}' | grep -o '"orderDetailId":[0-9]*'

curl -s -X POST $BASE_URL/order-details \
  -H "Content-Type: application/json" \
  -d '{"orderId":1,"productId":2,"quantity":1,"unitPrice":30000000}' | grep -o '"orderDetailId":[0-9]*'

echo -e "\n\n✅ 7. Fetching Data..."

echo -e "\n📊 All Products with Categories:"
curl -s $BASE_URL/products

echo -e "\n\n📦 Order #1 with full details:"
curl -s $BASE_URL/orders/1

echo -e "\n\n🎉 Testing completed successfully!"

