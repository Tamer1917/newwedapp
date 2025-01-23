const express = require('express');
const app = express();
const port = 3000;

// لتسهيل التعامل مع البيانات المرسلة في الطلب
app.use(express.json());

// إعداد الـ endpoint لتحديث النقاط
app.post('/update-score', (req, res) => {
    const { username, points } = req.body;  // استلام البيانات من البوت

    if (!username || !points) {
        return res.status(400).send({ error: "البيانات غير مكتملة!" });
    }

    // هنا يمكنك إضافة الكود اللازم لتخزين البيانات في قاعدة البيانات (مثل Firebase أو أي قاعدة بيانات أخرى)
    console.log(`تم استلام البيانات - اسم المستخدم: ${username}, النقاط: ${points}`);

    // الرد على الطلب
    res.status(200).send({ message: "تم تحديث النقاط بنجاح" });
});

// بدء الخادم
app.listen(port, () => {
    console.log(`الخادم يعمل على http://localhost:${port}`);
});
