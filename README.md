# EU5 Map Editor
This is a visual EU5 map editor made by Mutsuk111. It will return a zip file containg the updated .txt files, which the user then can relatively easily to mod their game. 
It is currently a demo. 

Project Goals:
 - Display the map in different modes.
 - Provide information for a location when it is clicked.
 - Allow changing a location's properties (owner, development, etc.).

Progress:
  A simple textbox gives prompts. A web page that shows the location.png, allows zooming, panning and clickiing. Returns the xy coordinates and the rgb(a) value
  of the clicked pixel. (Why?: ../named_locations/00_default.txt contains the reference hex rgb value so I guess that's how the game renders the map?)


TODO:
  1. Implementation: 
   - Display the location information when clicked: name, province, hex rgb value, owner, core, is it coastal, type (settlement / colony / uncolonized).
     Later {
       &1 development
       &2 topography, vegetation, climate, religion, culture, raw_material, natural harbor suitability
       &3 international orgnaization owner /* hre owns lands
       $4 timed modifier /* it's undercooked 
       %5 disease resistance type, disease resistance
       %6 cardinal seat
       %7 {pops.type, pops.size, pops.culture, pops.religion}
       &8 art location, art origin /* I'm not doing it
       &9 is it a market center
       &10 institution
       &11 (colony related stuff)
       &12 rank, town setup
     }
     
   - Different map modes: location (default), province, area, region, countries, empty.
     Later {
       &13 roads (Later detailed)
     }
     
   - Later {
       Allow mass chaning, i.e. mass changing locations owner.
       Blocks interact with impassable tiles & sea tiles      
     }
     
   - Later { Later {     
         Showing / changing stats of a country / intl' organization 
    }}
       
  2. Figure out a better way to render, draw  and flood color the map:
     Either use webGL or convert the locations.png into .svg (inspired by https://www.mapchart.net/eu-iv.html)
       
  4. Figure out how to return a zip file.
     
  Maybe {
    4. Build my own reference file?
  }


Files Using:
  ../in_game/
      map_data/ {
        /* definitions.txt
        /* location_templates.txt
        locations.png
        }
        named_locations/ {
          00_default.txt
        }
        

Files Referencing: /* so I don't need to find where they are everytime
  ../in_game/
      map_data/ {&2 location_template.txt}
  ../main_menu/
      setup/
        start/ {
          &1 14_development.txt
          &3 15_international_organizations.txt
          $4 21_locations.txt
          %5 19_diseases.txt
          %6 13_religion.txt
          %7 06_pops.txt
          &8 11_art.txt /* don't
          &9 03_markets.txt
          &10 08_institutions.txt
          &11 23_colonies.txt
          &12 07_cities_and_buildings.txt
          &13 09_roads.txt
        }

Notes: It's my first time actually doing fronted coding, modding, or using github, so please don't mind if this project is super ugly :(  

   
