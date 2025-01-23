import requests

# بيانات المستخدم
user_data = {"username": "test_user", "points": 10}

# إرسال البيانات إلى الخادم
response = requests.post("https://wednsdaychess111.vercel.app/update-score", json=user_data)

if response.status_code == 200:
    print("✅ تم إرسال البيانات بنجاح:", response.json())
else:
    print(f"⚠️ حدث خطأ: {response.status_code}, {response.text}")
