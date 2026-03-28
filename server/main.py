import json
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from typing import List

app = FastAPI()

class ConnectionManager:
    connections: List[WebSocket] = []
    
    def __init__(self):
        pass

    async def connect(self, ws: WebSocket):
        await ws.accept()
        self.connections.append(ws)
    
    async def disconnect(self, ws: WebSocket):
        self.connections.remove(ws)

    async def broadcast(self,author: str ,message: str):
        for ws in self.connections:
            await ws.send_json({
                "author": author,
                "message": message
            })

manager = ConnectionManager()

@app.websocket("/ws")
async def websocket(ws: WebSocket):
    await manager.connect(ws=ws)
    try:
        while True:
            data = await ws.receive_text()
            try:
                json_data = json.loads(data)
                author = json_data.get("author")
                message = json_data.get("message")
            except:
                pass
            await manager.broadcast(author=author, message=message)
            print(json_data)
    except WebSocketDisconnect:
        await manager.disconnect(ws=ws)