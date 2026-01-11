import csv
import requests
from bs4 import BeautifulSoup
import multiprocessing

#setting up names
input_file = 'ape.csv'
output_file = 'new_ape.csv'
base_link = 'https://www.howtopronounce.com/korean/'

#opening up the csv file to be edited
with open(input_file, newline='') as csvfile:
  csvreader = csv.reader(csvfile, delimiter=',')
  data = list(csvreader)

#using parallel loops
def give_link(indrow): #gets the link of the mp3 file which corresponds to the word in the first column
  ind, row = indrow
  if ind == 0:
    return 'mp3'
  else:
    audio_link = str(base_link + row[0])
    req = requests.get(audio_link) #html source code
    soup_parser = BeautifulSoup(req.text, 'html.parser')
  return soup_parser.find('audio')['src']

def appender(pair): #appends the elements of the mp3 column to the right of the other columns
  x,y = pair
  x.append(y)
  return x

pool_obj = multiprocessing.Pool()
mapping = pool_obj.map(give_link, enumerate(data))
final = pool_obj.map(appender, zip(data, mapping))

#creating a new csv for download (using parallel loops again)
with open(output_file, mode="w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(final[0])  # Write header row
    writer.writerows(final[1:])    # Write all data rows
