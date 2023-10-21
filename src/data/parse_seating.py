import pandas as pd
import json

df = pd.read_excel('src\data\Heather-And-Sarah-Seating-Chart.xlsx', index_col=None)

seating_chart = []

for row in df.index:
    person = {}
    for column in df:
        person[column] = str(df[column][row])
    seating_chart.append(person)

with open("src/data/seating_chart.json", "w") as outfile:
    json.dump(seating_chart, outfile)