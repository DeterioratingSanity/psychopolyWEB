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
        stringA = "Goody";
        stringB = "Premack"; //
        stringC = "Wilkes";
        stringD = "Hershey";
        stringE = "Kell";
        stringF = "Briggs";
        stringQ = "Principle states bait must be liked"
      }
      if (qCount === 2) {
        stringA = "Diabetes";
        stringB = "Cataract";
        stringC = "Glaucoma";
        stringD = "Stye";
        stringE = "Detachment"; //
        stringF = "Crack";
        stringQ = "Blindness from retinal trauma";
      }
      if (qCount === 3) {
        stringA = "Conformity";
        stringB = "Groupthink";
        stringC = "Obedience";
        stringD = "Polarize";//
        stringE = "Deindividuate";
        stringF = "Calm";
        stringQ = "Extreme actions in groups";
      }
      if (qCount === 4) {
        stringA = "Ecstasy";//
        stringB = "Crack";
        stringC = "Meth";
        stringD = "Mushrooms";
        stringE = "SSRIs";
        stringF = "Prozac";
        stringQ = "Amphetamine and Mild Hallucinogen";//
      }
      if (qCount === 5) {
        stringA = "Canal";
        stringB = "Cochlea";
        stringC = "Pinna";//
        stringD = "Eardrum";
        stringE = "Nerve";
        stringF = "Cornea";
        stringQ = "Collects incoming sound";
      }
      if (qCount === 6) {
        stringA = "Course";
        stringB = "Set";
        stringC = "Shtick";
        stringD = "Plan";
        stringE = "Project";
        stringF = "Schema";//
        stringQ = "Mental representation of the world";
      }
      if (qCount === 7) {
        stringA = "Erikson";
        stringB = "Freud";//
        stringC = "Jung";
        stringD = "Adler";
        stringE = "Wilkes";
        stringF = "Bergman";
        stringQ = "Studied inner conflict and unconscious";
      }
      if (qCount === 8) {
        stringA = "Mean";
        stringB = "Median";
        stringC = "Mode";
        stringD = "Modulus";
        stringE = "Inferential"; //
        stringF = "Portion";
        stringQ = "Data drawn from a random subset";
      }
      if (qCount === 9) {
        stringA = "Bandura";//
        stringB = "Kohler";
        stringC = "Tolman";
        stringD = "Skinner";
        stringE = "Pavlov";
        stringF = "Freud";
        stringQ = "Studied the modeling of behavior";
      }
      if (qCount === 10) {
        stringA = "20%";
        stringB = "30%";
        stringC = "40%";
        stringD = "50%"; //
        stringE = "60%";
        stringF = "70%";
        stringQ = "Absolute threshold detects this often";
      }
      if (qCount === 11) {
        stringA = "Jammed";
        stringB = "Fluid";
        stringC = "Constant";
        stringD = "Static";
        stringE = "Reversible";
        stringF = "Irreversible";//
        stringQ = "Inability to percieve an inverse";
      }
      if (qCount === 12) {
        stringA = "Meth";//
        stringB = "Crack";
        stringC = "Mushrooms";
        stringD = "Tobacco";
        stringE = "Alcohol";
        stringF = "Lean";
        stringQ = "Drug causing energy and euphoria";
      }
      if (qCount === 13) {
        stringA = "Join";
        stringB = "Aid";
        stringC = "Participant";//
        stringD = "Chace";
        stringE = "Associate";
        stringF = "Assist";
        stringQ = "Observe by doing";
      }
      if (qCount === 14) {
        stringA = "Case";
        stringB = "Example";
        stringC = "Specify";
        stringD = "Spread";
        stringE = "Generalize";//
        stringF = "Broaden";
        stringQ = "One percieved as all";
      }
      if (qCount === 15) {
        stringA = "Cones";
        stringB = "Rods";//
        stringC = "Retina";
        stringD = "Fovea";
        stringE = "Iris";
        stringF = "Pupil";
        stringQ = "Black and white perception";
      }
      if (qCount === 16) {
        stringA = "Secure";
        stringB = "Cozy";
        stringC = "Comfort";
        stringD = "Distaste";
        stringE = "Concern";
        stringF = "Phobia";//
        stringQ = "Specific fear";
      }
      if (qCount === 17) {
        stringA = "Walking";
        stringB = "Talking";
        stringC = "Sleeping";
        stringD = "Thinking";
        stringE = "Crying";
        stringF = "Death";
        stringQ = "Night terrors may lead to sleep...";
      }
      if (qCount === 18) {
        stringA = "0.95";
        stringB = "-0.96";//
        stringC = "0.4";
        stringD = "-0.32";
        stringE = ".0100";
        stringF = "0.52";
        stringQ = "Strongest relationship";
      }
      if (qCount === 19) {
        stringA = "Adler";
        stringB = "Bergman";
        stringC = "Hubman";
        stringD = "Hering";//
        stringE = "Berger";
        stringF = "Jung";
        stringQ = "Said one color inhibits another";
      }
      if (qCount === 20) {
        stringA = "Discriminate";
        stringB = "Perception";
        stringC = "Prejudice";
        stringD = "Thought";
        stringE = "Stereotype";//
        stringF = "Context";
        stringQ = "General idea of a group";
      }
      if (qCount === 21) {
        stringA = "Harlow";
        stringB = "Piaget";
        stringC = "Skinner";
        stringD = "Bergman";
        stringE = "Ainsworth";
        stringF = "Erikson";//
        stringQ = "Said experiences built personality";
      }
      if (qCount === 22) {
        stringA = "Serotonin";
        stringB = "Cortisol";
        stringC = "GABA"; //
        stringD = "Epinephrine";
        stringE = "Anandamide";
        stringF = "Glutamate";
        stringQ = "The reason smokers become anxious";
      }
      if (qCount === 23) {
        stringA = "Mean";//
        stringB = "Median";
        stringC = "Mode";
        stringD = "Roughly";
        stringE = "Average";
        stringF = "Chance";
        stringQ = "Average distribution of values";
      }
      if (qCount === 24) {
        stringA = "Cornea";
        stringB = "Retina";//
        stringC = "Iris";
        stringD = "Pupil";
        stringE = "Nerve";
        stringF = "Cone";
        stringQ = "Holds visual sensory receptors";
      }
      if (qCount === 25) {
        stringA = "Dissociate";
        stringB = "Blame";
        stringC = "Assert";
        stringD = "Projection";//
        stringE = "Suggest";
        stringF = "Feel";
        stringQ = "Ascribe bad actions to others";
      }

      //application

      if (qCount === 26) {
        stringA = "Error";
        stringB = "Projection";
        stringC = "Confusion";
        stringD = "Attribute";
        stringE = "Blame";
        stringF = "Displace"; //
        stringQ = "John trips and blames his shoes";
      }
      if (qCount === 27) {
        stringA = "Seasonal"; //
        stringB = "Bipolar";
        stringC = "Personal";
        stringD = "Perceptive";
        stringE = "Winter";
        stringF = "Glum";
        stringQ = "Hank becomes depressed in winter";
      }
      if (qCount === 28) {
        stringA = "Discriminate"; 
        stringB = "Bias";//
        stringC = "Choice";
        stringD = "Percieve";
        stringE = "Truth";
        stringF = "Watching";
        stringQ = "Phil sees what he expects to";
      }
      if (qCount === 29) {
        stringA = "US";
        stringB = "CS";
        stringC = "UR";
        stringD = "NR";
        stringE = "CR"; //
        stringF = "NS";
        stringQ = "A dog salivates at the ring of a bell";
      }
      if (qCount === 30) {
        stringA = "Watcher";
        stringB = "Sideline";
        stringC = "Bystander";//
        stringD = "Perception";
        stringE = "Hopeful";
        stringF = "Choice";
        stringQ = "Effect shown in K Genovese Case";
      }
      if (qCount === 31) {
        stringA = "Projection";
        stringB = "Displace";
        stringC = "Phobia";
        stringD = "Dissociate";//
        stringE = "Bipolar";
        stringF = "Depersonalize";
        stringQ = "Bill becomes Ian when stressed";
      }
      if (qCount === 32) {
        stringA = "Stutter";
        stringB = "Impairment";//
        stringC = "Exception";
        stringD = "Error";
        stringE = "Stress";
        stringF = "Incompetence";
        stringQ = "Sam fails when being observed";
      }
      if (qCount === 33) {
        stringA = "Catatonia";//
        stringB = "Stillness";
        stringC = "Dour";
        stringD = "Mania";
        stringE = "Euphoria";
        stringF = "Hyper";
        stringQ = "Lee froze in place due to his illness";
      }
      if (qCount === 34) {
        stringA = "Phobia";
        stringB = "Racism";
        stringC = "Hate";
        stringD = "Bias";
        stringE = "Prejudice";//
        stringF = "Discriminate";
        stringQ = "James acts on a baseless dislike";
      }
      if (qCount === 35) {
        stringA = "Youth";
        stringB = "Oblivious";
        stringC = "Accomodation";//
        stringD = "Error";
        stringE = "Stupidity";
        stringF = "Assumption";
        stringQ = "A child sees a cow as a dog";
      }
      if (qCount === 36) {
        stringA = "Same";
        stringB = "Static";
        stringC = "Fixed";
        stringD = "Variable";//
        stringE = "Changing";
        stringF = "Fluid";
        stringQ = "Tim checks the video from time to time";
      }
      if (qCount === 37) {
        stringA = "Unhappy";
        stringB = "Confusion";
        stringC = "Dissociate";
        stringD = "Seasonal";
        stringE = "Bipolar";
        stringF = "Depression";
        stringQ = "Ellie was unhappy over two weeks";
      }
      if (qCount === 38) {
        stringA = "PR"; //
        stringB = "NR";
        stringC = "PP";
        stringD = "NP";
        stringE = "UC";
        stringF = "NC";
        stringQ = "Sean was got a good thing for acting";
      }
      if (qCount === 39) {
        stringA = "Geography";
        stringB = "Locale";
        stringC = "Nearness";
        stringD = "Associate";
        stringE = "Similarity";//
        stringF = "Proximity";
        stringQ = "John and Jill both like the same coffee";
      }
      if (qCount === 40) {
        stringA = "Hole";
        stringB = "Trephine";
        stringC = "Break";
        stringD = "Snap";
        stringE = "Cataract";
        stringF = "Crevice";
        stringQ = "Bob has a hole cut in his head";
      }

      //real-world motion - judge

      if (qCount === 41) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate the Babinski Reflex"; //press foot
      }

      if (qCount === 42) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate the Rooting Reflex";
      }
      if (qCount === 43) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate the Moro Relfex";
      }
      if (qCount === 44) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate Displacement";
      }
      if (qCount === 45) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate Reaction Formation";
      }
      if (qCount === 46) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate Projection";
      }
      if (qCount === 47) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate Conventional Morality";
      }
      if (qCount === 48) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate Object Permanence";
      }
      if (qCount === 49) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate Maturation";
      }
      if (qCount === 50) {
        stringA = "Yes";
        stringB = "Yes";
        stringC = "Yes";
        stringD = "No";
        stringE = "No";
        stringF = "No";
        stringQ = "Demonstrate Regression";
      }
      if (qCount === 51) {
        qCount = 1;
      }

      var check = function() {
        if (qCount === 1) {
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
        if (qCount === 2) {
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
        if (qCount === 3) {
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
        if (qCount === 4) {
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
        if (qCount === 7) {
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
        if (qCount === 8) {
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
        if (qCount === 9) {
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
        if (qCount === 10) {
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
        if (qCount === 11) {
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
        if (qCount === 12) {
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
        if (qCount === 13) {
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
        if (qCount === 14) {
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
        if (qCount === 15) {
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
        if (qCount === 16) {
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
        if (qCount === 17) {
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
        if (qCount === 18) {
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
        if (qCount === 19) {
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
        if (qCount === 22) {
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
        if (qCount === 23) {
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
        if (qCount === 24) {
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
        if (qCount === 25) {
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
        if (qCount === 26) {
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
        if (qCount === 27) {
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
        if (qCount === 28) {
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
        if (qCount === 32) {
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
        if (qCount === 33) {
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
        if (qCount === 34) {
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
        if (qCount === 35) {
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
        if (qCount === 36) {
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
        if (qCount === 37) {
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
        if (qCount === 38) {
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
        if (qCount === 39) {
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
        if (qCount === 40) {
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
        
        //real world action
        
        if (qCount === 41) {
         if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 42) {
         if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 43) {
          if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 44) {
          if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 45) {
          if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 46) {
         if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 47) {
          if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 48) {
          if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 49) {
          if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
            purpleCorrect += 1;
          }
        }
        if (qCount === 50) {
          if (red1 === 1 || red2 === 1 || red3 === 1) {
            redCorrect += 1;
          }
          if (blue1 === 1 || blue2 === 1 || blue3 === 1) {
            blueCorrect += 1;
          }
          if (green1 === 1 || green2 === 1 || green3 === 1) {
            greenCorrect += 1;
          }
          if (yellow1 === 1 || yellow2 === 1 || yellow3 === 1) {
            yellowCorrect += 1;
          }
          if (purple1 === 1 || purple2 === 1 || purple3 === 1) {
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
            stringS = "Advance One.";
            check();
          } else if (select === 2) {
            stringS = "Skip One.";
            if (colorSet === 1) {
              colorSet = 3;
            } else if (colorSet === 2) {
              colorSet = 4;
            } else if (colorSet === 3) {
              colorSet = 5;
            } else if (colorSet === 4) {
              colorSet = 1;
            } else if (colorSet === 5) {
              colorSet = 2;
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
      } else if (redCorrect === 24) {
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
      textFont(monospace, 10);
      
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
