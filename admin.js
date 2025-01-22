function validateLogin(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์มแบบปกติ
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // ตรวจสอบ Username และ Password
    if (username === 'admin' && password === 'admin') {
      alert('เข้าสู่ระบบสำเร็จ');
      window.location.href = 'test.html'; // เปลี่ยนเป็นหน้าที่คุณต้องการ
    } else {
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  }
  