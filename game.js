var sketchProc = function(processingInstance) {

  var qCount = 1;

  var red1 = 0;
  var green1 = 0;
  var blue1 = 0;
  var yellow1 = 0;
  var purple1 = 0;
  var red2 = 0;
  var green2 = 0;
  var blue2 = 0;
  var yellow2 = 0;
  var purple2 = 0;
  var red3 = 0;
  var green3 = 0;
  var blue3 = 0;
  var yellow3 = 0;
  var purple3 = 0;
  var red4 = 0;
  var green4 = 0;
  var blue4 = 0;
  var yellow4 = 0;
  var purple4 = 0;
  var red5 = 0;
  var green5 = 0;
  var blue5 = 0;
  var yellow5 = 0;
  var purple5 = 0;
  var red6 = 0;
  var green6 = 0;
  var blue6 = 0;
  var yellow6 = 0;
  var purple6 = 0;

  var redCorrect = 0;
  var greenCorrect = 0;
  var blueCorrect = 0;
  var yellowCorrect = 0;
  var purpleCorrect = 0;

  var colorSet = 1;

  var b = 0;
  var w = 255;


  with(processingInstance) {

    size(400, 300);
    frameRate(60);

    //ProgramCodeGoesBelow
    noStroke();

    var stringS = "";


    var bottom = canvas.height;
    var right = canvas.width;
    var boxDim = 50;

    var redX = 180;
    var redY = 150;

    var greenX = 200;
    var greenY = 150;

    var blueX = 220;
    var blueY = 150;

    var yellowX = 200;
    var yellowY = 170;

    var purpleX = 200;
    var purpleY = 130;

    var playRedX = boxDim / 2 - 15;
    var playRedY = bottom - boxDim / 2;

    var playGreenX = boxDim / 2;
    var playGreenY = bottom - boxDim / 2;

    var playBlueX = boxDim / 2 + 15;
    var playBlueY = bottom - boxDim / 2;

    var playYellowX = boxDim / 2;
    var playYellowY = (bottom - boxDim / 2) + 15;

    var playPurpleX = boxDim / 2;
    var playPurpleY = (bottom - boxDim / 2) - 15;

    var radius = 4;

    //reset positions
    var qUp = function() {
      redX = 180;
      redY = 150;
      greenX = 200;
      greenY = 150;
      blueX = 220;
      blueY = 150;
      yellowX = 200;
      yellowY = 170;
      purpleX = 200;
      purpleY = 130;
    }

    var stringA = "egg";
    var stringB = "Egg";
    var stringC = "eGg";
    var stringD = "egG";
    var stringE = "EGg";
    var stringF = "eGG";

    var stringQ = "What, you egg?";
    
    var win = function() {
    	if(redCorrect > 23) {
      fill(255,0,0);
      rect(0,0,500,500);
      }
      if(blueCorrect > 23) {
      fill(0,0,255);
      rect(0,0,500,500);
      }
      if(greenCorrect > 23){
      fill(0,255,0);
      rect(0,0,500,500);
      }
      if(yellowCorrect > 23){
      fill(255,255,0);
      rect(0,0,500,500);
      }
      if(purpleCorrect > 23){
      fill(255,0,255);
      rect(0,0,500,500);
      }
    }

    draw = function() {
    background(255, 255, 255);
		win();
    
    
      if (qCount === 1) {
        stringA = " API "; //
        stringB = " IRS ";
        stringC = " TCP ";
        stringD = " FRE ";
        stringE = " LES ";
        stringF = " CIA ";
        stringQ = "A library of procedures"
      }
      if (qCount === 2) {
        stringA = " Egg ";
        stringB = " Byte ";
        stringC = " LLC ";
        stringD = " Binit ";
        stringE = " Vint ";
        stringF = " Bit "; //
        stringQ = "A Binary Digit";
      }
      if (qCount === 3) {
        stringA = " Eite ";
        stringB = " Byte "; //
        stringC = " 8bit ";
        stringD = " Crit ";
        stringE = " Bite ";
        stringF = " Beyt ";
        stringQ = "A sequence of 8 bits";
      }
      if (qCount === 4) {
        stringA = "Datwo";
        stringB = "Twodata";
        stringC = "Dadata";
        stringD = "Datameta";
        stringE = "Metadata"; //
        stringF = "Datadata";
        stringQ = "Data about data";
      }
      if (qCount === 5) {
        stringA = "Set";
        stringB = "Packet";
        stringC = "Library"; //
        stringD = "Package";
        stringE = "Rulebook";
        stringF = "Way";
        stringQ = "Collection of common procedures";
      }
      if (qCount === 6) {
        stringA = "Internet";
        stringB = "WWW"; //
        stringC = "HTTP";
        stringD = "Book";
        stringE = "HTML";
        stringF = "HTTPS";
        stringQ = "System of interlinked pages";
      }
      if (qCount === 7) {
        stringA = "Bit";
        stringB = "Cracker";
        stringC = "Byte";
        stringD = "Tracker";
        stringE = "Cookie"; //
        stringF = "Chip";
        stringQ = "Bit of tracking information";
      }
      if (qCount === 8) {
        stringA = "Phishing"; //
        stringB = "Trick";
        stringC = "Hijack";
        stringD = "Takeover";
        stringE = "Theft";
        stringF = "Override";
        stringQ = "Deception attack";
      }
      if (qCount === 9) {
        stringA = "Lossing";
        stringB = "Lossful";
        stringC = "Lossless";
        stringD = "Lossy"; //
        stringE = "Lossful";
        stringF = "Lossed";
        stringQ = "Discards Compressed Data";
      }
      if (qCount === 10) {
        stringA = "Lossly";
        stringB = "Lossy";
        stringC = "Lossing";
        stringD = "Lossful";
        stringE = "Lossed";
        stringF = "Lossless"; //
        stringQ = "Preserves Compressed Data";
      }
      if (qCount === 11) {
        stringA = "Followup";
        stringB = "Parallel"; //
        stringC = "LLC";
        stringD = "Linear";
        stringE = "HTTPS";
        stringF = "Sequence";
        stringQ = "Simultaneous processing on multiple fronts";
      }
      if (qCount === 12) {
        stringA = "Share";
        stringB = "Citizen"; //
        stringC = "Everyone";
        stringD = "Open";
        stringE = "Popular";
        stringF = "Group";
        stringQ = "Crowdsourced scientific endeavors";
      }
      if (qCount === 13) {
        stringA = "FFE";
        stringB = "UDP";
        stringC = "HTP";
        stringD = "XYZ";
        stringE = "TCP"; //
        stringF = "WWW";
        stringQ = "Reliable transfer, error checking";
      }
      if (qCount === 14) {
        stringA = "FTC";
        stringB = "EGE";
        stringC = "HTML";
        stringD = "DDE";
        stringE = "HTTP";
        stringF = "UDP"; //
        stringQ = "Unreliable transfer, no checking";
      }
      if (qCount === 15) {
        stringA = "Scalable"; //
        stringB = "Growy";
        stringC = "Growful";
        stringD = "Scale";
        stringE = "Newness";
        stringF = "Meeting";
        stringQ = "Capacity to accomodate growth";
      }
      if (qCount === 16) {
        stringA = "PLT";
        stringB = "Strength";
        stringC = "Integrity";
        stringD = "Capacity";
        stringE = "Reliable"; //
        stringF = "Testing";
        stringQ = "Capacity to overcome component failure";
      }
      if (qCount === 17) {
        stringA = "BES";
        stringB = "LDS";
        stringC = "IP"; //
        stringD = "TCP";
        stringE = "UDP";
        stringF = "HCC";
        stringQ = "System of web identification";
      }
      if (qCount === 18) {
        stringA = "Beans";
        stringB = "Wyatt*";
        stringC = "Crack";
        stringD = "Logic"; //
        stringE = "Static";
        stringF = "Flow";
        stringQ = "Error causing unexpected program behavior";
      }
      if (qCount === 19) {
        stringA = "Protocol";
        stringB = "Syntax"; //
        stringC = "Language";
        stringD = "System";
        stringE = "Guide";
        stringF = "More";
        stringQ = "Error violating language protocols";
      }
      if (qCount === 20) {
        stringA = "Over";
        stringB = "Flowover";
        stringC = "Top";
        stringD = "Exceed";
        stringE = "Overflow"; //
        stringF = "Max";
        stringQ = "Error exceeding maximum system bits";
      }
      if (qCount === 21) {
        stringA = "Digital"; //
        stringB = "Analog";
        stringC = "Constant";
        stringD = "Temp";
        stringE = "Current";
        stringF = "Nowish";
        stringQ = "Data sampled over time";
      }
      if (qCount === 22) {
        stringA = "Digital";
        stringB = "Analog"; //
        stringC = "Wrong";
        stringD = "Constant";
        stringE = "Current";
        stringF = "Sample";
        stringQ = "Data assessed continuously";
      }
      if (qCount === 23) {
        stringA = "Optimize";
        stringB = "Adequate";
        stringC = "Debug";
        stringD = "Lexile";
        stringE = "Heuristic"; //
        stringF = "TCP";
        stringQ = "Find best solution to an extensive issue";
      }
      if (qCount === 24) {
        stringA = "KGB";
        stringB = "CIA";
        stringC = "HTTP"; //
        stringD = "SSA";
        stringE = "JS";
        stringF = "HTML";
        stringQ = "Web operation protocol";
      }
      if (qCount === 25) {
        stringA = "Central";
        stringB = "LLC";
        stringC = "Soup";
        stringD = "Camera";
        stringE = "TCP";
        stringF = "HTTPS"; //
        stringQ = "Enhances security measures";
      }
      if (qCount === 26) {
        stringA = "CSS";
        stringB = "HTML"; //
        stringC = "JS";
        stringD = "C";
        stringE = "XML";
        stringF = "Python";
        stringQ = "Language of web pages";
      }
      if (qCount === 27) {
        stringA = "XML";
        stringB = "SVG";
        stringC = "PNG";
        stringD = "CSS"; //
        stringE = "SCS";
        stringF = "BPG";
        stringQ = "Language of web aesthetics";
      }
      if (qCount === 28) {
        stringA = "B";
        stringB = "C-";
        stringC = "C++";
        stringD = "English";
        stringE = "Python";
        stringF = "JS"; //
        stringQ = "Language of this";
      }
      if (qCount === 29) {
        stringA = "Slow";
        stringB = "30mph";
        stringC = "Rate";
        stringD = "C";
        stringE = "Bandwidth";
        stringF = "Blurd";
        stringQ = "Top speed for data transmission";
      }
      if (qCount === 30) {
        stringA = "Bit";
        stringB = "Byte";
        stringC = "Modular"; //
        stringD = "Chunk";
        stringE = "Segment";
        stringF = "Component";
        stringQ = "Seperation of systems into independent subsets";
      }
      if (qCount === 31) {
        stringA = "Travel";
        stringB = "Traversal"; //
        stringC = "Progress";
        stringD = "Speed";
        stringE = "Rate";
        stringF = "HTML";
        stringQ = "Iteration of list items";
      }
      if (qCount === 32) {
        stringA = "Bug";
        stringB = "Forget";
        stringC = "Course";
        stringD = "Memory";
        stringE = "Runtime"; //
        stringF = "Proge";
        stringQ = "Error from disordered memory";
      }
      if (qCount === 33) {
        stringA = "Eachy";
        stringB = "Pear";
        stringC = "Long";
        stringD = "Linear"; //
        stringE = "Binary";
        stringF = "Tertiary";
        stringQ = "Check each item to find desired output";
      }
      if (qCount === 34) {
        stringA = "Pear";
        stringB = "Short";
        stringC = "Binary"; //
        stringD = "Twoy";
        stringE = "Tickle";
        stringF = "Eachy";
        stringQ = "Half the list to find desired output";
      }
      if (qCount === 35) {
        stringA = "TCP";
        stringB = "Glass";
        stringC = "Tablet";
        stringD = "PC";
        stringE = "Fridge";
        stringF = "Device"; //
        stringQ = "Thing that can run a platform";
      }
      if (qCount === 36) {
        stringA = "Network"; //
        stringB = "CES";
        stringC = "WWW";
        stringD = "IP";
        stringE = "Online";
        stringF = "Matrix";
        stringQ = "Things connected to transmit data";
      }
      if (qCount === 37) {
        stringA = "Method";
        stringB = "Protocol"; //
        stringC = "Course";
        stringD = "Plan";
        stringE = "Way";
        stringF = "Wae";
        stringQ = "Agreed rules of functionality";
      }
      if (qCount === 38) {
        stringA = "Eggo";
        stringB = "Secret";
        stringC = "Private";
        stringD = "Public";
        stringE = "Symmetric"; //
        stringF = "Mine";
        stringQ = "Encryption with one key on both ends";
      }
      if (qCount === 39) {
        stringA = "Private";
        stringB = "Symmetric";
        stringC = "Public"; //
        stringD = "Vigenere";
        stringE = "Enigma";
        stringF = "Caesar";
        stringQ = "Encryption with one hidden key and one open key";
      }
      if (qCount === 40) {
        stringA = "RAP"; //
        stringB = "In";
        stringC = "Glitch";
        stringD = "Bug";
        stringE = "Intern";
        stringF = "WWW";
        stringQ = "Undesired connection which exposes private traffic";
      }
      if (qCount === 41) {
        stringA = "Overflow";
        stringB = "Phishing";
        stringC = "Error";
        stringD = "Virus"; //
        stringE = "Glitch";
        stringF = "Bug";
        stringQ = "Self-propogating malware";
      }

      if (qCount === 42) {
        stringA = "Process";
        stringB = "Way";
        stringC = "Algorithm"; //
        stringD = "Plan";
        stringE = "Method";
        stringF = "Course";
        stringQ = "Generalized solution";
      }
      if (qCount === 43) {
        stringA = "Twoary";
        stringB = "Twoby";
        stringC = "Binful";
        stringD = "Decibal";
        stringE = "Binary"; //
        stringF = "Hex";
        stringQ = "Base-Two Numeral System";
      }
      if (qCount === 44) {
        stringA = "Decimal";
        stringB = "Hex"; //
        stringC = "Binary";
        stringD = "Hegs";
        stringE = "Gress";
        stringF = "Bent";
        stringQ = "Base-Sixteen Numeral System";
      }
      if (qCount === 45) {
        stringA = "Tenary";
        stringB = "Tex";
        stringC = "Ero";
        stringD = "Hex";
        stringE = "Binary";
        stringF = "Decimal";
        stringQ = "Base-Ten Numeral System";
      }
      if (qCount === 46) {
        stringA = "Boolean"; //
        stringB = "Balse";
        stringC = "Fue";
        stringD = "Tralse";
        stringE = "True";
        stringF = "False";
        stringQ = "True/False or Binary Decision";
      }
      if (qCount === 47) {
        stringA = "Floaty";
        stringB = "Egg";
        stringC = "Big";
        stringD = "Narp";
        stringE = "Floating"; //
        stringF = "Small";
        stringQ = "Numbers with long, inane decimal points";
      }
      if (qCount === 48) {
        stringA = "ETA";
        stringB = "Distance";
        stringC = "Length";
        stringD = "Latency"; //
        stringE = "Route";
        stringF = "Trip";
        stringQ = "Time for signal to reach destination";
      }
      if (qCount === 49) {
        stringA = "Copper";
        stringB = "Fiber"; //
        stringC = "WiFI";
        stringD = "Cable";
        stringE = "Shiny";
        stringF = "Light";
        stringQ = "Transfer of binary via light";
      }
      if (qCount === 50) {
        stringA = "HDP";
        stringB = "WWW";
        stringC = "IP";
        stringD = "Sat";
        stringE = "Web";
        stringF = "WiFi"; //
        stringQ = "Radio-based wireless networking";
      }
      if (qCount === 51) {
        qCount = 1;
      }

      var check = function() {
        if (qCount === 1) {
          if (red1 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 2) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 3) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 4) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 5) {
          if (red3 === 1) {
            redCorrect += 1;
          }
          if (blue3 === 1) {
            blueCorrect += 1;
          }
          if (green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 6) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 7) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 8) {
          if (red1 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 9) {
          if (red4 === 1) {
            redCorrect += 1;
          }
          if (blue4 === 1) {
            blueCorrect += 1;
          }
          if (green4 === 1) {
            greenCorrect += 1;
          }
          if (yellow4 === 1) {
            yellowCorrect += 1;
          }
          if (purple4 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 10) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 11) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 12) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 13) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 14) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 15) {
          if (red1 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 16) {
          if (red4 === 1) {
            redCorrect += 1;
          }
          if (blue4 === 1) {
            blueCorrect += 1;
          }
          if (green4 === 1) {
            greenCorrect += 1;
          }
          if (yellow4 === 1) {
            yellowCorrect += 1;
          }
          if (purple4 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 17) {
          if (red3 === 1) {
            redCorrect += 1;
          }
          if (blue3 === 1) {
            blueCorrect += 1;
          }
          if (green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 18) {
          if (red4 === 1) {
            redCorrect += 1;
          }
          if (blue4 === 1) {
            blueCorrect += 1;
          }
          if (green4 === 1) {
            greenCorrect += 1;
          }
          if (yellow4 === 1) {
            yellowCorrect += 1;
          }
          if (purple4 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 19) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 20) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 21) {
          if (red1 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 22) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 23) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 24) {
          if (red3 === 1) {
            redCorrect += 1;
          }
          if (blue3 === 1) {
            blueCorrect += 1;
          }
          if (green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 25) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 26) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 27) {
          if (red4 === 1) {
            redCorrect += 1;
          }
          if (blue4 === 1) {
            blueCorrect += 1;
          }
          if (green4 === 1) {
            greenCorrect += 1;
          }
          if (yellow4 === 1) {
            yellowCorrect += 1;
          }
          if (purple4 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 28) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 29) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 30) {
          if (red3 === 1) {
            redCorrect += 1;
          }
          if (blue3 === 1) {
            blueCorrect += 1;
          }
          if (green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 31) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 32) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 33) {
          if (red4 === 1) {
            redCorrect += 1;
          }
          if (blue4 === 1) {
            blueCorrect += 1;
          }
          if (green4 === 1) {
            greenCorrect += 1;
          }
          if (yellow4 === 1) {
            yellowCorrect += 1;
          }
          if (purple4 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 34) {
          if (red3 === 1) {
            redCorrect += 1;
          }
          if (blue3 === 1) {
            blueCorrect += 1;
          }
          if (green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 35) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 36) {
          if (red1 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 37) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 38) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 39) {
          if (red3 === 1) {
            redCorrect += 1;
          }
          if (blue3 === 1) {
            blueCorrect += 1;
          }
          if (green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 40) {
          if (red1 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 41) {
          if (red4 === 1) {
            redCorrect += 1;
          }
          if (blue4 === 1) {
            blueCorrect += 1;
          }
          if (green4 === 1) {
            greenCorrect += 1;
          }
          if (yellow4 === 1) {
            yellowCorrect += 1;
          }
          if (purple4 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 42) {
          if (red3 === 1) {
            redCorrect += 1;
          }
          if (blue3 === 1) {
            blueCorrect += 1;
          }
          if (green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 43) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 44) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 45) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 46) {
          if (red1 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 47) {
          if (red5 === 1) {
            redCorrect += 1;
          }
          if (blue5 === 1) {
            blueCorrect += 1;
          }
          if (green5 === 1) {
            greenCorrect += 1;
          }
          if (yellow5 === 1) {
            yellowCorrect += 1;
          }
          if (purple5 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 48) {
          if (red4 === 1) {
            redCorrect += 1;
          }
          if (blue4 === 1) {
            blueCorrect += 1;
          }
          if (green4 === 1) {
            greenCorrect += 1;
          }
          if (yellow4 === 1) {
            yellowCorrect += 1;
          }
          if (purple4 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 49) {
          if (red2 === 1) {
            redCorrect += 1;
          }
          if (blue2 === 1) {
            blueCorrect += 1;
          }
          if (green2 === 1) {
            greenCorrect += 1;
          }
          if (yellow2 === 1) {
            yellowCorrect += 1;
          }
          if (purple2 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 50) {
          if (red6 === 1) {
            redCorrect += 1;
          }
          if (blue6 === 1) {
            blueCorrect += 1;
          }
          if (green6 === 1) {
            greenCorrect += 1;
          }
          if (yellow6 === 1) {
            yellowCorrect += 1;
          }
          if (purple6 === 1) {
            purpleCorrect += 1;
          }
        }
      }




      var reverse = 0;
      var luck = function() {
        var checkMe = round(random(1, 99));
        console.log(checkMe);
        stringS = "";
        if (checkMe > 70) {
          console.log("over 70");
          var select = round(random(1, 3));
          if (select === 1) {
            stringS = "Advance Two.";
            check();
          } else if (select === 2) {
            stringS = "Skip One.";
            if (colorSet === 1) {
              colorSet = 2;
            } else if (colorSet === 2) {
              colorSet = 3;
            } else if (colorSet === 3) {
              colorSet = 4;
            } else if (colorSet === 4) {
              colorSet = 5;
            } else if (colorSet === 5) {
              colorSet = 1;
            }


          } else if (select === 3) {
            stringS = "Back One.";
            if (reverse === 0) {
              reverse = 1;
            } else if (reverse === 1) {
              reverse = 0;
            }
          } else {
            console.log("not");
          }
        }
      }

      if (colorSet === 1) {
        keyPressed = function() {
          if (keyCode === 68 || keyCode === 39) { //straight movements
            redX = redX + 2;
          }
          if (keyCode === 65 || keyCode === 37) {
            redX = redX - 2;
          }
          if (keyCode === 87 || keyCode === 38) {
            redY = redY - 2;
          }
          if (keyCode === 83 || keyCode === 40) {
            redY = redY + 2;
          }
          if (keyCode === 80) {
            check();
            luck();
            qCount += 1;
            qUp();
            if (reverse === 0) {
              colorSet += 1;
            } else {
              colorSet = 5;
            }
          }

        }
      }
      if (colorSet === 2) {
        keyPressed = function() {
          if (keyCode === 68 || keyCode === 39) { //straight movements
            greenX = greenX + 2;
          }
          if (keyCode === 65 || keyCode === 37) {
            greenX = greenX - 2;
          }
          if (keyCode === 87 || keyCode === 38) {
            greenY = greenY - 2;
          }
          if (keyCode === 83 || keyCode === 40) {
            greenY = greenY + 2;
          }
          if (keyCode === 80) {
            check();
            luck();
            qCount += 1;
            qUp();
            if (reverse === 0) {
              colorSet += 1;
            } else {
              colorSet -= 1;
            }
          }
        }
      }
      if (colorSet === 3) {
        keyPressed = function() {
          if (keyCode === 68 || keyCode === 39) { //straight movements
            blueX = blueX + 2;
          }
          if (keyCode === 65 || keyCode === 37) {
            blueX = blueX - 2;
          }
          if (keyCode === 87 || keyCode === 38) {
            blueY = blueY - 2;
          }
          if (keyCode === 83 || keyCode === 40) {
            blueY = blueY + 2;
          }
          if (keyCode === 80) {
            check();
            luck();
            qCount += 1;
            qUp();
            if (reverse === 0) {
              colorSet += 1;
            } else {
              colorSet -= 1;
            }
          }

        }
      }
      if (colorSet === 4) {
        keyPressed = function() {
          if (keyCode === 68 || keyCode === 39) { //straight movements
            yellowX = yellowX + 2;
          }
          if (keyCode === 65 || keyCode === 37) {
            yellowX = yellowX - 2;
          }
          if (keyCode === 87 || keyCode === 38) {
            yellowY = yellowY - 2;
          }
          if (keyCode === 83 || keyCode === 40) {
            yellowY = yellowY + 2;
          }
          if (keyCode === 80) {
            check();
            luck();
            qCount += 1;
            qUp();
            if (reverse === 0) {
              colorSet += 1;
            } else {
              colorSet -= 1;
            }
          }

        }
      }
      if (colorSet === 5) {
        keyPressed = function() {
          if (keyCode === 68 || keyCode === 39) { //straight movements
            purpleX = purpleX + 2;
          }
          if (keyCode === 65 || keyCode === 37) {
            purpleX = purpleX - 2;
          }
          if (keyCode === 87 || keyCode === 38) {
            purpleY = purpleY - 2;
          }
          if (keyCode === 83 || keyCode === 40) {
            purpleY = purpleY + 2;
          }
          if (keyCode === 80) {
            check();
            luck();
            qCount += 1;
            qUp();
            if (reverse === 0) {
              colorSet = 1;
            } else {
              colorSet -= 1;
            }
          }

        }
      }


      //top border
      if (redY < boxDim + radius) {
        redY += radius;
        redCorrect += 1;
      }
      if (greenY < boxDim + radius) {
        greenY += radius;
        greenCorrect += 1;
      }
      if (blueY < boxDim + radius) {
        blueY += radius;
        blueCorrect += 1;
      }
      if (yellowY < boxDim + radius) {
        yellowY += radius;
        yellowCorrect += 1;
      }
      if (purpleY < boxDim + radius) {
        purpleY += radius;
        purpleCorrect += 1;
      }

      //bottom border
      if (redY > bottom - boxDim - radius) {
        redY -= radius;
      }
      if (greenY > bottom - boxDim - radius) {
        greenY -= radius;
      }
      if (blueY > bottom - boxDim - radius) {
        blueY -= radius;
      }
      if (yellowY > bottom - boxDim - radius) {
        yellowY -= radius;
      }
      if (purpleY > bottom - boxDim - radius) {
        purpleY -= radius;
      }

      //left border
      if (redX < boxDim + radius) {
        redX += radius;
      }
      if (greenX < boxDim + radius) {
        greenX += radius;
      }
      if (blueX < boxDim + radius) {
        blueX += radius;
      }
      if (yellowX < boxDim + radius) {
        yellowX += radius;
      }
      if (purpleX < boxDim + radius) {
        purpleX += radius;
      }

      //right border
      if (redX > right - boxDim - radius) {
        redX -= radius;
      }
      if (greenX > right - boxDim - radius) {
        greenX -= radius;
      }
      if (blueX > right - boxDim - radius) {
        blueX -= radius;
      }
      if (yellowX > right - boxDim - radius) {
        yellowX -= radius;
      }
      if (purpleX > right - boxDim - radius) {
        purpleX -= radius;
      }

      //move red
      if (redCorrect === 1) {
        playRedY = (bottom - boxDim / 2) - boxDim;
      } else if (redCorrect === 2) {
        playRedY = (bottom - boxDim / 2) - boxDim * 2;
      } else if (redCorrect === 3) {
        playRedY = (bottom - boxDim / 2) - boxDim * 3;
      } else if (redCorrect === 4) {
        playRedY = (bottom - boxDim / 2) - boxDim * 4;
      } else if (redCorrect === 5) {
        playRedY = (bottom - boxDim / 2) - boxDim * 5;
      } else if (redCorrect === 6) {
        playRedX = boxDim / 2 - 15 + boxDim;
      } else if (redCorrect === 7) {
        playRedX = boxDim / 2 - 15 + boxDim * 2;
      } else if (redCorrect === 8) {
        playRedX = boxDim / 2 - 15 + boxDim * 3;
      } else if (redCorrect === 9) {
        playRedX = boxDim / 2 - 15 + boxDim * 4;
      } else if (redCorrect === 10) {
        playRedX = boxDim / 2 - 15 + boxDim * 5;
      } else if (redCorrect === 11) {
        playRedX = boxDim / 2 - 15 + boxDim * 6;
      } else if (redCorrect === 12) {
        playRedX = boxDim / 2 - 15 + boxDim * 7;
      } else if (redCorrect === 13) {
        playRedY = (bottom - boxDim / 2) - boxDim * 4;
      } else if (redCorrect === 14) {
        playRedY = (bottom - boxDim / 2) - boxDim * 3;
      } else if (redCorrect === 15) {
        playRedY = (bottom - boxDim / 2) - boxDim * 2;
      } else if (redCorrect === 16) {
        playRedY = (bottom - boxDim / 2) - boxDim;
      } else if (redCorrect === 17) {
        playRedY = (bottom - boxDim / 2);
      } else if (redCorrect === 18) {
        playRedX = boxDim / 2 - 15 + boxDim * 6;
      } else if (redCorrect === 19) {
        playRedX = boxDim / 2 - 15 + boxDim * 5;
      } else if (redCorrect === 20) {
        playRedX = boxDim / 2 - 15 + boxDim * 4;
      } else if (redCorrect === 21) {
        playRedX = boxDim / 2 - 15 + boxDim * 3;
      } else if (redCorrect === 22) {
        playRedX = boxDim / 2 - 15 + boxDim * 2;
      } else if (redCorrect === 23) {
        playRedX = boxDim / 2 - 15 + boxDim;
      } else if (redCorrect > 23) {
        playRedX = boxDim / 2 - 15;
        
      }

      if (greenCorrect === 1) {
        playGreenY = (bottom - boxDim / 2) - boxDim;
      } else if (greenCorrect === 2) {
        playGreenY = (bottom - boxDim / 2) - boxDim * 2;
      } else if (greenCorrect === 3) {
        playGreenY = (bottom - boxDim / 2) - boxDim * 3;
      } else if (greenCorrect === 4) {
        playGreenY = (bottom - boxDim / 2) - boxDim * 4;
      } else if (greenCorrect === 5) {
        playGreenY = (bottom - boxDim / 2) - boxDim * 5;
      } else if (greenCorrect === 6) {
        playGreenX = boxDim / 2 + boxDim;
      } else if (greenCorrect === 7) {
        playGreenX = boxDim / 2 + boxDim * 2;
      } else if (greenCorrect === 8) {
        playGreenX = boxDim / 2 + boxDim * 3;
      } else if (greenCorrect === 9) {
        playGreenX = boxDim / 2 + boxDim * 4;
      } else if (greenCorrect === 10) {
        playGreenX = boxDim / 2 + boxDim * 5;
      } else if (greenCorrect === 11) {
        playGreenX = boxDim / 2 + boxDim * 6;
      } else if (greenCorrect === 12) {
        playGreenX = boxDim / 2 + boxDim * 7;
      } else if (greenCorrect === 13) {
        playGreenY = (bottom - boxDim / 2) - boxDim * 4;
      } else if (greenCorrect === 14) {
        playGreenY = (bottom - boxDim / 2) - boxDim * 3;
      } else if (greenCorrect === 15) {
        playGreenY = (bottom - boxDim / 2) - boxDim * 2;
      } else if (greenCorrect === 16) {
        playGreenY = (bottom - boxDim / 2) - boxDim;
      } else if (greenCorrect === 17) {
        playGreenY = (bottom - boxDim / 2);
      } else if (greenCorrect === 18) {
        playGreenX = boxDim / 2 + boxDim * 6;
      } else if (greenCorrect === 19) {
        playGreenX = boxDim / 2 + boxDim * 5;
      } else if (greenCorrect === 20) {
        playGreenX = boxDim / 2 + boxDim * 4;
      } else if (greenCorrect === 21) {
        playGreenX = boxDim / 2 + boxDim * 3;
      } else if (greenCorrect === 22) {
        playGreenX = boxDim / 2 + boxDim * 2;
      } else if (greenCorrect === 23) {
        playGreenX = boxDim / 2 + boxDim;
      } else if (greenCorrect === 24) {
        playGreenX = boxDim / 2;
      }

      if (blueCorrect === 1) {
        playBlueY = (bottom - boxDim / 2) - boxDim;
      } else if (blueCorrect === 2) {
        playBlueY = (bottom - boxDim / 2) - boxDim * 2;
      } else if (blueCorrect === 3) {
        playBlueY = (bottom - boxDim / 2) - boxDim * 3;
      } else if (blueCorrect === 4) {
        playBlueY = (bottom - boxDim / 2) - boxDim * 4;
      } else if (blueCorrect === 5) {
        playBlueY = (bottom - boxDim / 2) - boxDim * 5;
      } else if (blueCorrect === 6) {
        playBlueX = boxDim / 2 + 15 + boxDim;
      } else if (blueCorrect === 7) {
        playBlueX = boxDim / 2 + 15 + boxDim * 2;
      } else if (blueCorrect === 8) {
        playBlueX = boxDim / 2 + 15 + boxDim * 3;
      } else if (blueCorrect === 9) {
        playBlueX = boxDim / 2 + 15 + boxDim * 4;
      } else if (blueCorrect === 10) {
        playBlueX = boxDim / 2 + 15 + boxDim * 5;
      } else if (blueCorrect === 11) {
        playBlueX = boxDim / 2 + 15 + boxDim * 6;
      } else if (blueCorrect === 12) {
        playBlueX = boxDim / 2 + 15 + boxDim * 7;
      } else if (blueCorrect === 13) {
        playBlueY = (bottom - boxDim / 2) - boxDim * 4;
      } else if (blueCorrect === 14) {
        playBlueY = (bottom - boxDim / 2) - boxDim * 3;
      } else if (blueCorrect === 15) {
        playBlueY = (bottom - boxDim / 2) - boxDim * 2;
      } else if (blueCorrect === 16) {
        playBlueY = (bottom - boxDim / 2) - boxDim;
      } else if (blueCorrect === 17) {
        playBlueY = (bottom - boxDim / 2);
      } else if (blueCorrect === 18) {
        playBlueX = boxDim / 2 + 15 + boxDim * 6;
      } else if (blueCorrect === 19) {
        playBlueX = boxDim / 2 + 15 + boxDim * 5;
      } else if (blueCorrect === 20) {
        playBlueX = boxDim / 2 + 15 + boxDim * 4;
      } else if (blueCorrect === 21) {
        playBlueX = boxDim / 2 + 15 + boxDim * 3;
      } else if (blueCorrect === 22) {
        playBlueX = boxDim / 2 + 15 + boxDim * 2;
      } else if (blueCorrect === 23) {
        playBlueX = boxDim / 2 + 15 + boxDim;
      } else if (blueCorrect === 24) {
        playBlueX = boxDim / 2 + 15;
      }

      if (yellowCorrect === 1) {
        playYellowY = (bottom - boxDim / 2) - boxDim + 15;
      } else if (yellowCorrect === 2) {
        playYellowY = (bottom - boxDim / 2) - boxDim * 2 + 15;
      } else if (yellowCorrect === 3) {
        playYellowY = (bottom - boxDim / 2) - boxDim * 3 + 15;
      } else if (yellowCorrect === 4) {
        playYellowY = (bottom - boxDim / 2) - boxDim * 4 + 15;
      } else if (yellowCorrect === 5) {
        playYellowY = (bottom - boxDim / 2) - boxDim * 5 + 15;
      } else if (yellowCorrect === 6) {
        playYellowX = boxDim / 2 + boxDim;
      } else if (yellowCorrect === 7) {
        playYellowX = boxDim / 2 + boxDim * 2;
      } else if (yellowCorrect === 8) {
        playYellowX = boxDim / 2 + boxDim * 3;
      } else if (yellowCorrect === 9) {
        playYellowX = boxDim / 25 + boxDim * 4;
      } else if (yellowCorrect === 10) {
        playYellowX = boxDim / 2 + boxDim * 5;
      } else if (yellowCorrect === 11) {
        playYellowX = boxDim / 2 + boxDim * 6;
      } else if (yellowCorrect === 12) {
        playYellowX = boxDim / 2 + boxDim * 7;
      } else if (yellowCorrect === 13) {
        playYellowY = (bottom - boxDim / 2) - boxDim * 4 + 15;
      } else if (yellowCorrect === 14) {
        playYellowY = (bottom - boxDim / 2) - boxDim * 3 + 15;
      } else if (yellowCorrect === 15) {
        playYellowY = (bottom - boxDim / 2) - boxDim * 2 + 15;
      } else if (yellowCorrect === 16) {
        playYellowY = (bottom - boxDim / 2) - boxDim + 15;
      } else if (yellowCorrect === 17) {
        playYellowY = (bottom - boxDim / 2) + 15;
      } else if (yellowCorrect === 18) {
        playYellowX = boxDim / 2 + boxDim * 6;
      } else if (yellowCorrect === 19) {
        playYellowX = boxDim / 2 + boxDim * 5;
      } else if (yellowCorrect === 20) {
        playYellowX = boxDim / 2 + boxDim * 4;
      } else if (yellowCorrect === 21) {
        playYellowX = boxDim / 2 + boxDim * 3;
      } else if (yellowCorrect === 22) {
        playYellowX = boxDim / 2 + boxDim * 2;
      } else if (yellowCorrect === 23) {
        playYellowX = boxDim / 2 + boxDim;
      } else if (yellowCorrect === 24) {
        playYellowX = boxDim / 2;
      }

      if (purpleCorrect === 1) {
        playPurpleY = (bottom - boxDim / 2) - boxDim - 15;
      } else if (purpleCorrect === 2) {
        playPurpleY = (bottom - boxDim / 2) - boxDim * 2 - 15;
      } else if (purpleCorrect === 3) {
        playPurpleY = (bottom - boxDim / 2) - boxDim * 3 - 15;
      } else if (purpleCorrect === 4) {
        playPurpleY = (bottom - boxDim / 2) - boxDim * 4 - 15;
      } else if (purpleCorrect === 5) {
        playPurpleY = (bottom - boxDim / 2) - boxDim * 5 - 15;
      } else if (purpleCorrect === 6) {
        playPurpleX = boxDim / 2 + boxDim;
      } else if (purpleCorrect === 7) {
        playPurpleX = boxDim / 2 + boxDim * 2;
      } else if (purpleCorrect === 8) {
        playPurpleX = boxDim / 2 + boxDim * 3;
      } else if (purpleCorrect === 9) {
        playPurpleX = boxDim / 2 + boxDim * 4;
      } else if (purpleCorrect === 10) {
        playPurpleX = boxDim / 2 + boxDim * 5;
      } else if (purpleCorrect === 11) {
        playPurpleX = boxDim / 2 + boxDim * 6;
      } else if (purpleCorrect === 12) {
        playPurpleX = boxDim / 2 + boxDim * 7;
      } else if (purpleCorrect === 13) {
        playPurpleY = (bottom - boxDim / 2) - boxDim * 4 - 15;
      } else if (purpleCorrect === 14) {
        playPurpleY = (bottom - boxDim / 2) - boxDim * 3 - 15;
      } else if (purpleCorrect === 15) {
        playPurpleY = (bottom - boxDim / 2) - boxDim * 2 - 15;
      } else if (purpleCorrect === 16) {
        playPurpleY = (bottom - boxDim / 2) - boxDim - 15;
      } else if (purpleCorrect === 17) {
        playPurpleY = (bottom - boxDim / 2) - 15;
      } else if (purpleCorrect === 18) {
        playPurpleX = boxDim / 2 + boxDim * 6;
      } else if (purpleCorrect === 19) {
        playPurpleX = boxDim / 2 + boxDim * 5;
      } else if (purpleCorrect === 20) {
        playPurpleX = boxDim / 2 + boxDim * 4;
      } else if (purpleCorrect === 21) {
        playPurpleX = boxDim / 2 + boxDim * 3;
      } else if (purpleCorrect === 22) {
        playPurpleX = boxDim / 2 + boxDim * 2;
      } else if (purpleCorrect === 23) {
        playPurpleX = boxDim / 2 + boxDim;
      } else if (purpleCorrect === 24) {
        playPurpleX = boxDim / 2;
      }

      if (redX > (right / 2) - 120 && redX < (right / 2) - 120 + 60 && redY > (height / 2) - 70 && redY < (height / 2) - 30) {
        red1 = 1;
      } else {
        red1 = 0;
      }
      if (greenX > (right / 2) - 120 && greenX < (right / 2) - 120 + 60 && greenY > (height / 2) - 70 && greenY < (height / 2) - 30) {
        green1 = 1;
      } else {
        green1 = 0;
      }
      if (blueX > (right / 2) - 120 && blueX < (right / 2) - 120 + 60 && blueY > (height / 2) - 70 && blueY < (height / 2) - 30) {
        blue1 = 1;
      } else {
        blue1 = 0;
      }
      if (yellowX > (right / 2) - 120 && yellowX < (right / 2) - 120 + 60 && yellowY > (height / 2) - 70 && yellowY < (height / 2) - 30) {
        yellow1 = 1;
      } else {
        yellow1 = 0;
      }
      if (purpleX > (right / 2) - 120 && purpleX < (right / 2) - 120 + 60 && purpleY > (height / 2) - 70 && purpleY < (height / 2) - 30) {
        purple1 = 1;
      } else {
        purple1 = 0;
      }

      if (redX > (right / 2) - 30 && redX < (right / 2) - 30 + 60 && redY > (height / 2) - 70 && redY < (height / 2) - 30) {
        red2 = 1;
      } else {
        red2 = 0;
      }
      if (greenX > (right / 2) - 30 && greenX < (right / 2) - 30 + 60 && greenY > (height / 2) - 70 && greenY < (height / 2) - 30) {
        green2 = 1;
      } else {
        green2 = 0;
      }
      if (blueX > (right / 2) - 30 && blueX < (right / 2) - 30 + 60 && blueY > (height / 2) - 70 && blueY < (height / 2) - 30) {
        blue2 = 1;
      } else {
        blue2 = 0;
      }
      if (yellowX > (right / 2) - 30 && yellowX < (right / 2) - 30 + 60 && yellowY > (height / 2) - 70 && yellowY < (height / 2) - 30) {
        yellow2 = 1;
      } else {
        yellow2 = 0;
      }
      if (purpleX > (right / 2) - 30 && purpleX < (right / 2) - 30 + 60 && purpleY > (height / 2) - 70 && purpleY < (height / 2) - 30) {
        purple2 = 1;
      } else {
        purple2 = 0;
      }

      if (redX > (right / 2) + 60 && redX < (right / 2) + 60 + 60 && redY > (height / 2) - 70 && redY < (height / 2) - 30) {
        red3 = 1;
      } else {
        red3 = 0;
      }
      if (greenX > (right / 2) + 60 && greenX < (right / 2) + 60 + 60 && greenY > (height / 2) - 70 && greenY < (height / 2) - 30) {
        green3 = 1;
      } else {
        green3 = 0;
      }
      if (blueX > (right / 2) + 60 && blueX < (right / 2) + 60 + 60 && blueY > (height / 2) - 70 && blueY < (height / 2) - 30) {
        blue3 = 1;
      } else {
        blue3 = 0;
      }
      if (yellowX > (right / 2) + 60 && yellowX < (right / 2) + 60 + 60 && yellowY > (height / 2) - 70 && yellowY < (height / 2) - 30) {
        yellow3 = 1;
      } else {
        yellow3 = 0;
      }
      if (purpleX > (right / 2) + 60 && purpleX < (right / 2) + 60 + 60 && purpleY > (height / 2) - 70 && purpleY < (height / 2) - 30) {
        purple3 = 1;
      } else {
        purple3 = 0;
      }

      if (redX > (right / 2) - 120 && redX < (right / 2) - 120 + 60 && redY > (height / 2) + 35 && redY < (height / 2) + 65) {
        red4 = 1;
      } else {
        red4 = 0;
      }
      if (greenX > (right / 2) - 120 && greenX < (right / 2) - 120 + 60 && greenY > (height / 2) + 35 && greenY < (height / 2) + 65) {
        green4 = 1;
      } else {
        green4 = 0;
      }
      if (blueX > (right / 2) - 120 && blueX < (right / 2) - 120 + 60 && blueY > (height / 2) + 35 && blueY < (height / 2) + 65) {
        blue4 = 1;
      } else {
        blue4 = 0;
      }
      if (yellowX > (right / 2) - 120 && yellowX < (right / 2) - 120 + 60 && yellowY > (height / 2) + 35 && yellowY < (height / 2) + 65) {
        yellow4 = 1;
      } else {
        yellow4 = 0;
      }
      if (purpleX > (right / 2) - 120 && purpleX < (right / 2) - 120 + 60 && purpleY > (height / 2) + 35 && purpleY < (height / 2) + 65) {
        purple4 = 1;
      } else {
        purple4 = 0;
      }

      if (redX > (right / 2) - 30 && redX < (right / 2) - 30 + 60 && redY > (height / 2) + 35 && redY < (height / 2) + 65) {
        red5 = 1;
      } else {
        red5 = 0;
      }
      if (greenX > (right / 2) - 30 && greenX < (right / 2) - 30 + 60 && greenY > (height / 2) + 35 && greenY < (height / 2) + 65) {
        green5 = 1;
      } else {
        green5 = 0;
      }
      if (blueX > (right / 2) - 30 && blueX < (right / 2) - 30 + 60 && blueY > (height / 2) + 35 && blueY < (height / 2) + 65) {
        blue5 = 1;
      } else {
        blue5 = 0;
      }
      if (yellowX > (right / 2) - 30 && yellowX < (right / 2) - 30 + 60 && yellowY > (height / 2) + 35 && yellowY < (height / 2) + 65) {
        yellow5 = 1;
      } else {
        yellow5 = 0;
      }
      if (purpleX > (right / 2) - 30 && purpleX < (right / 2) - 30 + 60 && purpleY > (height / 2) + 35 && purpleY < (height / 2) + 65) {
        purple5 = 1;
      } else {
        purple5 = 0;
      }

      if (redX > (right / 2) + 60 && redX < (right / 2) + 60 + 60 && redY > (height / 2) + 35 && redY < (height / 2) + 65) {
        red6 = 1;
      } else {
        red6 = 0;
      }
      if (greenX > (right / 2) + 60 && greenX < (right / 2) + 60 + 60 && greenY > (height / 2) + 35 && greenY < (height / 2) + 65) {
        green6 = 1;
      } else {
        green6 = 0;
      }
      if (blueX > (right / 2) + 60 && blueX < (right / 2) + 60 + 60 && blueY > (height / 2) + 35 && blueY < (height / 2) + 65) {
        blue6 = 1;
      } else {
        blue6 = 0;
      }
      if (yellowX > (right / 2) + 60 && yellowX < (right / 2) + 60 + 60 && yellowY > (height / 2) + 35 && yellowY < (height / 2) + 65) {
        yellow6 = 1;
      } else {
        yellow6 = 0;
      }
      if (purpleX > (right / 2) + 60 && purpleX < (right / 2) + 60 + 60 && purpleY > (height / 2) + 35 && purpleY < (height / 2) + 65) {
        purple6 = 1;
      } else {
        purple6 = 0;
      }

      //replicate movement for all four others, then questions


      fill(255, 255, 255);
      stroke(0, 0, 0);
      strokeWeight(2);

      rect(0, bottom - boxDim, boxDim, boxDim);
      rect(0, bottom - (boxDim * 2), boxDim, boxDim);
      rect(0, bottom - (boxDim * 3), boxDim, boxDim);
      rect(0, bottom - (boxDim * 4), boxDim, boxDim);
      rect(0, bottom - (boxDim * 5), boxDim, boxDim);
      rect(0, bottom - (boxDim * 6), boxDim, boxDim);

      rect(right - boxDim, bottom - boxDim, boxDim, boxDim);
      rect(right - boxDim, bottom - (boxDim * 2), boxDim, boxDim);
      rect(right - boxDim, bottom - (boxDim * 3), boxDim, boxDim);
      rect(right - boxDim, bottom - (boxDim * 4), boxDim, boxDim);
      rect(right - boxDim, bottom - (boxDim * 5), boxDim, boxDim);
      rect(right - boxDim, bottom - (boxDim * 6), boxDim, boxDim);

      rect(boxDim, 0, boxDim, boxDim);
      rect(boxDim * 2, 0, boxDim, boxDim);
      rect(boxDim * 3, 0, boxDim, boxDim);
      rect(boxDim * 4, 0, boxDim, boxDim);
      rect(boxDim * 5, 0, boxDim, boxDim);
      rect(boxDim * 6, 0, boxDim, boxDim);

      rect(boxDim, bottom - boxDim, boxDim, boxDim);
      rect(boxDim * 2, bottom - boxDim, boxDim, boxDim);
      rect(boxDim * 3, bottom - boxDim, boxDim, boxDim);
      rect(boxDim * 4, bottom - boxDim, boxDim, boxDim);
      rect(boxDim * 5, bottom - boxDim, boxDim, boxDim);
      rect(boxDim * 6, bottom - boxDim, boxDim, boxDim);

      //questions
      rect((right / 2) - 120, (height / 2) - 70, 60, 40);
      rect((right / 2) - 30, (height / 2) - 70, 60, 40);
      rect((right / 2) + 60, (height / 2) - 70, 60, 40);
      rect((right / 2) - 120, (height / 2) + 35, 60, 40);
      rect((right / 2) - 30, (height / 2) + 35, 60, 40);
      rect((right / 2) + 60, (height / 2) + 35, 60, 40);


      fill(255, 0, 0);
      stroke(255, 0, 0);
      ellipse(redX, redY, radius * 2, radius * 2);

      ellipse(playRedX, playRedY, radius * 2, radius * 2);

      fill(0, 255, 0);
      stroke(0, 255, 0);
      ellipse(greenX, greenY, radius * 2, radius * 2);

      ellipse(playGreenX, playGreenY, radius * 2, radius * 2);
      fill(0, 0, 255);
      stroke(0, 0, 255);
      ellipse(blueX, blueY, radius * 2, radius * 2);

      ellipse(playBlueX, playBlueY, radius * 2, radius * 2);
      fill(255, 255, 0);
      stroke(255, 255, 0);
      ellipse(yellowX, yellowY, radius * 2, radius * 2);

      ellipse(playYellowX, playYellowY, radius * 2, radius * 2);
      fill(255, 0, 255);
      stroke(255, 0, 255);
      ellipse(purpleX, purpleY, radius * 2, radius * 2);

      ellipse(playPurpleX, playPurpleY, radius * 2, radius * 2);



      fill(0, 0, 0);
      var monospace = createFont("monospace");
      textFont(monospace);
      text(stringA, (right / 2) - 115, (height / 2) - 47);
      text(stringB, (right / 2) - 25, (height / 2) - 47);
      text(stringC, (right / 2) + 65, (height / 2) - 47);

      text(stringD, (right / 2) - 115, (height / 2) + 58);
      text(stringE, (right / 2) - 25, (height / 2) + 58);
      text(stringF, (right / 2) + 65, (height / 2) + 58);

      text(stringQ, (right / 2) - textWidth(stringQ) / 2, (height / 2) + boxDim * 9 / 5);
      text(stringS, (right / 2) - textWidth(stringS) / 2, (height / 2) - boxDim * 10 / 6);

      //just position relative to num right answers? euh?
    };
    //ProgramCodeGoesAbove

  }
};

var canvas = document.getElementById("game");
var processingInstance = new Processing(canvas, sketchProc);
