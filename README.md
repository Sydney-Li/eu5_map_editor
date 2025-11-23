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
   - [] Display the location information when clicked: name, province, hex rgb value, owner, core, is it coastal, type (settlement / colony / uncolonized).
     Later {
       [] &1 development <br/>
       [] &2 topography, vegetation, climate, religion, culture, raw_material, natural harbor suitability <br/>
       [] &3 international orgnaization owner /* hre owns lands <br/>
       [] $4 timed modifier <br/>/* it's undercooked
       [] %5 disease resistance type, disease resistance <br/>
       [] %6 cardinal seat <br/>
       [] %7 <pops.type, pops.size, pops.culture, pops.religion> <br/>
       [] &8 art location, art origin /* I'm not doing it <br/>
       [] &9 is it a market center <br/>
       [] &10 institution <br/>
       [] &11 (colony related stuff) <br/>
       [] &12 rank, town setup <br/>
     }
     
   - [] Different map modes: location (default), province, area, region, countries, empty.
     Later {
       &13 roads (Later detailed)
     }
     
   - Later {
       [] Allow mass chaning, i.e. mass changing locations owner.
       [] Blocks interact with impassable tiles & sea tiles      
     }
     
   - Later { Later {     
         [] Showing / changing stats of a country / intl' organization 
    }}
       
  2. [] Figure out a better way to render, draw  and flood color the map:
     Either use webGL or convert the locations.png into .svg (inspired by https://www.mapchart.net/eu-iv.html)
       
  4. [] Figure out how to return a zip file.
     
  5. Maybe {
    [] Build my own reference file?
  }


Files Using: <br/>
  ../in_game/ <br/>
      map_data/ { <br/>
        /* definitions.txt <br/>
        /* location_templates.txt <br/>
        locations.png <br/>
        } <br/>
        named_locations/ { <br/>
          00_default.txt <br/>
        } <br/>
        

Files Referencing:  <br/> /* so I don't need to find where they are everytime
  ../in_game/ <br/>
      map_data/ {&2 location_template.txt} <br/>
  ../main_menu/ <br/>
      setup/ <br/>
        start/ { <br/>
          &1 14_development.txt <br/>
          &3 15_international_organizations.txt <br/>
          $4 21_locations.txt <br/>
          %5 19_diseases.txt <br/>
          %6 13_religion.txt <br/>
          %7 06_pops.txt <br/>
          &8 11_art.txt <br/> /* don't
          &9 03_markets.txt <br/>
          &10 08_institutions.txt <br/>
          &11 23_colonies.txt <br/>
          &12 07_cities_and_buildings.txt <br/>
          &13 09_roads.txt <br/>
        } <br/>
 <br/> <br/>
Notes: It's my first time actually doing fronted coding, modding, or using github, so please don't mind if this project is super ugly :(
