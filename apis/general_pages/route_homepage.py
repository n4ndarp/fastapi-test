from fastapi import APIRouter, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

webpage = Jinja2Templates(directory="wp")
router = APIRouter()

@router.get("/")
def homepage(request: Request, response_class=HTMLResponse):
    return webpage.TemplateResponse("index.html", {"request": request})