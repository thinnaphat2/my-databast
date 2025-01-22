import sqlite3

# เชื่อมต่อกับฐานข้อมูล (หรือสร้างฐานข้อมูลใหม่)
conn = sqlite3.connect('my_database.db')

# สร้าง cursor
cursor = conn.cursor()

# สร้างตาราง (หากไม่มี)
cursor.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT
)
''')

# บันทึกการเปลี่ยนแปลง
conn.commit()

# ปิดการเชื่อมต่อ
conn.close()
