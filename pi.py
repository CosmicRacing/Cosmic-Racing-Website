from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import urllib.parse
import time
import json

PATH = "C:\\Users\\Reakles\\Desktop\\web scraping selenium\\chromedriver_win32\\chromedriver.exe"

try:
    driver = webdriver.Chrome(PATH)
    driver.get("http://127.0.0.1:5500/pi.html")
    driver.maximize_window()
    while True:
        driver.find_element_by_css_selector("#previous").click()
        time.sleep(5)
finally:
    driver.quit()
