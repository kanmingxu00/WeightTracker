import sqlite3

def create_database():
    print("Creating database...")  
    try:
        conn = sqlite3.connect('weights.db')
        c = conn.cursor()
        c.execute('''CREATE TABLE IF NOT EXISTS Users (username TEXT PRIMARY KEY)''')
        c.execute('''CREATE TABLE IF NOT EXISTS Weights (username TEXT PRIMARY KEY, weight INTEGER,
                FOREIGN KEY (username) REFERENCES Users(username)) ON DELETE CASCADE''')
        conn.commit()
    except sqlite3.Error as e:
        print(f"Error creating database: {e}")
    finally:
        conn.close()

def createUser(user: str):
    conn = sqlite3.connect('weights.db')
    c = conn.cursor()
    c.execute('''INSERT INTO Users (username) VALUES (?) ON CONFLICT(username) DO NOTHING''', (user,))
    conn.commit()
    conn.close()

def addOrUpdateUserWeight(user: str, weight: int):
    conn = sqlite3.connect('weights.db')
    c = conn.cursor()
    c.execute('''
                INSERT INTO Weights (username, weight)
                VALUES (?, ?)
                ON CONFLICT(username) DO UPDATE SET
                    weight = excluded.weight;
              ''', (user, weight,))
    conn.commit()
    conn.close()


def getUserWeights():
    conn = sqlite3.connect('weights.db')
    c = conn.cursor()
    c.execute('''SELECT * FROM Weights''')
    rows = c.fetchall()
    conn.commit()
    conn.close()
    return rows

def deleteUser(user: str):
    conn = sqlite3.connect('weights.db')
    c = conn.cursor()
    c.execute('''DELETE FROM Users WHERE username = ?''', (user, ))
    conn.commit()
    conn.close()
