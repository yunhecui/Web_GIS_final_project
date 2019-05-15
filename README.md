# Web_GIS_final_project

## Data Source:  
### https://www.dhs.gov/immigration-statistics  
  
## Data Cleaning:
- Use python to remove ',' from csv file, change the non-numerical columns to numerical one; use pd.melt to collapse data.  
- Use ArcGIS to join the csv file with world shapefile (one to many join, referring to https://gis.stackexchange.com/questions/177506/one-to-many-joins-on-a-feature-class-to-a-table). Select only the countries has immigrant to USA, export to shapefile, makesure every column has a correct data type.  
- Upload the shapefile zip to mapbox studio as a tileset.  
