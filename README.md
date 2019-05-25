# Web_GIS_final_project

This is an individual course project done by Yunhe Cui with instruction from Chris Whong 

## Data Source:  
### https://www.dhs.gov/immigration-statistics  
  
## Data Cleaning:
- Use python to remove ',' from immigrant csv file, change the non-numerical columns to numerical one;  
- Use ArcGIS to join the csv file with world shapefile (one to many join, referring to https://gis.stackexchange.com/questions/177506/one-to-many-joins-on-a-feature-class-to-a-table). Select only the countries has immigrant to USA, export to shapefile, makesure every column has a correct data type.  
- Upload the shapefile zip to mapbox studio as a tileset.  
  
## Tableau chart
- I sum up the immigrant number for different years and draw the bar chart with tableau public. The original link is https://public.tableau.com/views/immi/Sheet1?:embed=y&:display_count=yes&:origin=viz_share_link  

## Improvement (work IP)
add legend label; add click pop-up for capitals; add US colored layer

## Future work:
I will concentrate more on the responsive web development and give the map readers a better experience when using different mobile devices.

## Contact: If there is anything that is not clear, please contact Yunhe Cui (yc3420@nyu.edu). I will be more than happy to explain.

Reference: Mapbox time slider example (https://docs.mapbox.com/help/tutorials/show-changes-over-time/) and other mapboxgl instructions.   

You can see the map here: https://yunhecui.github.io/Web_GIS_final_project/
