      function btn_north_click() {
        switch(currentLocation)
        {
          case 0: 
            currentLocation = 100;
            enable_buttons();
            constructionZone();
            //var message1 = "You headed towards towards the back of the yard to Phineas and Ferb's work zone where the roller coaster is going to be built. No hideout entrance here."
            //updateText(message1);
            var north_disable = document.getElementById("north_button");
            north_disable.disabled = "disabled";
            var east_disable = document.getElementById("east_button");
            east_disable.disabled = "disabled";
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
              if (haveVisitedConstruction===false) { //if we havn't been in the north direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedConstruction = true; //now it's true because we have been in this direction before
              }
              /*if (itemAtConstructionZone===false) {
                  message01 = "YOU FOUND A" + " " + inv_a;
                  updateText(message01);
                  //items = inv_a;
                  itemAtConstructionZone = true;
              }*/
          break;
          case 102: 
            currentLocation = 0;
            enable_buttons();
            backYard();
            //var message2 = "You are heading back to where you started to the middle of the back yard."
            //updateText(message2);
          break;
          case 106: 
            currentLocation = 104;
            enable_buttons();
            hideout();
            //var message3 = "You are heading towards where you first entered your hideout."
            //updateText(message3);
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
          break;
          case 104: 
            currentLocation = 105;
            enable_buttons();
            monogram();
            //var message4 = "You are heading towards a giant tv screen where Major Monogram is waiting for you to give you an assignment."
            //updateText(message4);
            var north_disable = document.getElementById("north_button");
            north_disable.disabled = "disabled";
            var east_disable = document.getElementById("east_button");
            east_disable.disabled = "disabled";
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
              if (haveVisitedMonogram===false) { //if we havn't been in the north direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedMonogram = true; //now it's true because we have been in this direction before
              }
           break;
           case 107: 
             currentLocation = 102;
             enable_buttons();
             house();
             //var message5 = "You are heading towards the back of the house and the back yard."
             //updateText(message5);
             var east_disable = document.getElementById("east_button");
             east_disable.disabled = "disabled";
             var west_disable = document.getElementById("west_button");
             west_disable.disabled = "disabled";
           break;
           case 110: 
             currentLocation = 107;
             enable_buttons();
             livingRoom();
             //var message6 = "You are heading into the living room."
             //updateText(message6);
           break;
           default: alert("error north");
        } 
      }  
        
      function btn_east_click() {
        switch(currentLocation)
        {
          case 104: 
            currentLocation = 103;
            enable_buttons();
            tree();
            //var message1 = "You are coming out of the tree where you entered your hideout."
            //updateText(message1);
            var north_disable = document.getElementById("north_button");
            north_disable.disabled = "disabled";
            var south_disable = document.getElementById("south_button");
            south_disable.disabled = "disabled";
          break;
          case 103: 
            currentLocation = 0;
            enable_buttons();
            backYard();
            //var message2 = "You are heading back to where you started towards the middle of the back yard."
            //updateText(message2);
          break;
          case 0: 
            currentLocation = 101;
            enable_buttons();
            carZone();
            //var message3 = "Buford and Baljeet are supposed to be designing the roller coaster cars, but instead, Buford is sitting on Baljeet. No hideout entrance here."
            //updateText(message3);
            var north_disable = document.getElementById("north_button");
            north_disable.disabled = "disabled";
            var east_disable = document.getElementById("east_button");
            east_disable.disabled = "disabled";
            var south_disable = document.getElementById("south_button");
            south_disable.disabled = "disabled";
              if (haveVisitedCarZone===false) { //if we havn't been in the east direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedCarZone = true; //now it's true because we have been in this direction before
              }
           break;
           case 107: 
             currentLocation = 109;
             enable_buttons();
             kitchen();
             //var message4 = "You are heading into the kitchen."
             //updateText(message4);
             var north_disable = document.getElementById("north_button");
             north_disable.disabled = "disabled";
             var east_disable = document.getElementById("east_button");
             east_disable.disabled = "disabled";
             var south_disable = document.getElementById("south_button");
             south_disable.disabled = "disabled";
               if (haveVisitedKitchen===false) { //if we havn't been in the east direction yet
                   score = score + 5; //take the global variable score and add 5
                   haveVisitedKitchen = true; //now it's true because we have been in this direction before        
               }
           break;
           case 108: 
             currentLocation = 107;
             enable_buttons();
             livingRoom();
             //var message5 = "You are heading into the living room."
             //updateText(message5);
           break;
           default: alert("error east"); 
        }
      }     

      function btn_south_click() {
        switch(currentLocation)
        {
          case 100: 
            currentLocation = 0;
            enable_buttons();
            backYard();
            //var message1 = "You heading back to where you started towards the middle of the back yard."
            //updateText(message1);
          break;
          case 0: 
            currentLocation = 102;
            enable_buttons();
            house();
            //var message2 = "Your heading toward the house and you see Candace on the phone, probably with her mom trying to bust Phineas and Ferb for making a roller coaster. No hideout entrance here, but the door is open."
            //updateText(message2);
            var east_disable = document.getElementById("east_button");
            east_disable.disabled = "disabled";
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
              if (haveVisitedHouse===false) { //if we havn't been in the south direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedHouse = true; //now it's true because we have been in this direction before
              }
          break;
          case 105: 
            currentLocation = 104;
            enable_buttons();
            hideout();
            //var message3 = "You are coming back to where you first entered your hideout."
            //updateText(message3);
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
          break;
          case 104: 
            currentLocation = 106;
            enable_buttons();
            equipment();
            //var message4 = "You entered your equipment room. There are different gadgets and transportation devices."
            //updateText(message4);
            var east_disable = document.getElementById("east_button");
            east_disable.disabled = "disabled";
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
            var south_disable = document.getElementById("south_button");
            south_disable.disabled = "disabled";
              if (haveVisitedEquipment===false) { //if we havn't been in the south direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedEquipment = true; //now it's true because we have been in this direction before
              }
          break; 
          case 102: 
            currentLocation = 107;
            enable_buttons();
            livingRoom();
            //var message5 = "You are entering the living room."
            //updateText(message5);
              if (haveVisitedLivingRoom===false) { //if we havn't been in the south direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedLivingRoom = true; //now it's true because we have been in this direction before
              }
          break;
          case 107: 
            currentLocation = 110;
            enable_buttons();
            phineasAndFerbsRoom();
            //var message6 = "You are entering Phineas and Ferb's room."
            //updateText(message6);
            var east_disable = document.getElementById("east_button");
            east_disable.disabled = "disabled";
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
            var south_disable = document.getElementById("south_button");
            south_disable.disabled = "disabled";
              if (haveVisitedPhineasAndFerbsRoom===false) { //if we havn't been in the south direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedEquipment = true; //now it's true because we have been in this direction before
              }
          break;
          default: alert("error south");
        }
      }

      function btn_west_click() {
        switch(currentLocation)
        {
          case 101: 
            currentLocation = 0;
            enable_buttons();
            backYard();
            //var message1 = "You are heading back to where you started towards the middle of the back yard."
            //updateText(message1);
          break;
          case 0: 
            currentLocation = 103;
            enable_buttons();
            tree();
            var north_disable = document.getElementById("north_button");
            north_disable.disabled = "disabled";
            var south_disable = document.getElementById("south_button");
            south_disable.disabled = "disabled";
            //var message2 = "You headed towards the side of the yard where there is a tree, and an entrance to your hideout! Woo-hoo!"
            //updateText(message2);
              if (haveVisitedTree===false) { //if we havn't been in the west direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedTree = true; //now it's true because we have been in this direction before
              }
          break;
          case 103: 
            currentLocation = 104;
            enable_buttons();
            hideout();
            //var message3 = "You entered your hideout. There are two doors, one to your left and one to your right."
            //updateText(message3);
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
              if (haveVisitedHideout===false) { //if we havn't been in the west direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedHideout = true; //now it's true because we have been in this direction before
              }
              /*if (itemAtHideout===false) {
                  message03 = "YOU FOUND YOUR" + " " + inv_b;
                  updateText(message03);
                  //items = inv_b;
                  itemAtHideout = true;
              }*/
          break;
          case 109: 
            currentLocation = 107;
            enable_buttons();
            livingRoom();
            //var message4 = "You are heading into the living room."
            //updateText(message4);
          break;
          case 107: 
            currentLocation = 108;
            enable_buttons();
            garage();
            //var message4 = "You are entering the garage."
            //updateText(message4);
            var west_disable = document.getElementById("west_button");
            west_disable.disabled = "disabled";
            var north_disable = document.getElementById("north_button");
            north_disable.disabled = "disabled";
            var south_disable = document.getElementById("south_button");
            south_disable.disabled = "disabled";
              if (haveVisitedGarage===false) { //if we havn't been in the west direction yet
                  score = score + 5; //take the global variable score and add 5
                  haveVisitedGarage = true; //now it's true because we have been in this direction before
              }
          break;
          default: alert("error west");
        }
      }