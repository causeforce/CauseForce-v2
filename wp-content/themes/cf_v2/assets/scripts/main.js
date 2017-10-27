/* ========================================================================
 * DOM-based Routing
 * Based on http://goo.gl/EUTi53 by Paul Irish
 *
 * Only fires on body classes that match. If a body class contains a dash,
 * replace the dash with an underscore when adding it to the object below.
 *
 * .noConflict()
 * The routing is enclosed within an anonymous function so that you can
 * always reference jQuery with $, even when in .noConflict() mode.
 * ======================================================================== */

(function($) {

  // Use this variable to set up the common and page specific functions. If you
  // rename this variable, you will also need to rename the namespace below.
  var Sage = {
    // All pages scripts go here
    'common': {
      init: function() {
        // JavaScript to be fired on all pages

        $('.bt-menu').click(function(e) {
            $(this).toggleClass('active');
            return false;
        });
        $('.bt-menu').on('click', function() {
            $('.mobile-overlay').fadeToggle();
        });
        // Mail Icon/Quick Contact
        $('p.close-icn').on('click', function() {
           $('.ct-form').slideUp();
        });
        $('.mail-icn').on('click', function() {
           $('.ct-form').slideDown(); 
        });
          
        // ON Scroll Up/Down to show/hide Infinite CF Logo
        var windowSize = $(window).width();
          
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 70) {
                $('header.banner').addClass('fixed-nav');
                $('.fixed-nav > .menu-cont > .brand > img').attr('src', '../wp-content/uploads/2017/10/Group-236.svg');
            } else {
                $('header.banner').removeClass('fixed-nav');
                $('.menu-cont > .brand > img').attr('src', '../wp-content/uploads/2017/10/Group-61.svg');
            } 
        });
      },
      finalize: function() {
        // JavaScript to be fired on all pages, after page specific JS is fired
      }
    },
    // Home page
    'home': {
      init: function() {
        // JavaScript to be fired on the home page
        $(".gray-row").waypoint(function(){
        // $('.gray-row').fadeToggle();
            $('.square').addClass('show');
            $('#graph').addClass('show');
            }, { 
                offset: '98%'
        });
        $(".col-pic-row").waypoint(function(){
            $('.text-col').addClass('show');
            }, { 
                offset: '50%'
        });       
        $(".col-pic-row").waypoint(function(){
            $('.picture-col').addClass('show');
            }, { 
                offset: '65%'
        });
        $(".ready-row").waypoint(function(){
            $('.talk-col').addClass('show');
            }, { 
                offset: '95%'
        });
        $(".ready-row").waypoint(function(){
            $('.orange-btn').addClass('show');
            }, { 
                offset: '70%'
        });
      },
      finalize: function() {
        // JavaScript to be fired on the home page, after the init JS
      }
    },
    // Our Work Page
    'our_work': {
      init: function() {
        // JavaScript to be fired on the about us page
        $('.row-02 .col-md-3').on('click', function(){
            $(this).children('.text-cont').addClass('orange-bg');
            $(this).siblings('.col-md-3').children('.text-cont').removeClass('orange-bg');
            if ($(this).hasClass('db-col')) {
                $(this).siblings('.col-12.txt-col').children('p.diabetes-txt').fadeIn();
                $(this).siblings('.col-12.txt-col').children().not('p.diabetes-txt').fadeOut();
            } else if ($(this).hasClass('afp-col')) {
                $(this).siblings('.col-12.txt-col').children('p.afp-txt').fadeIn();
                $(this).siblings('.col-12.txt-col').children().not('p.afp-txt').fadeOut();
            } else if ($(this).hasClass('ccrf-col')) {
                $(this).siblings('.col-12.txt-col').children('p.ccrf-txt').fadeIn();
                $(this).siblings('.col-12.txt-col').children().not('p.ccrf-txt').fadeOut();
            } else if ($(this).hasClass('ow-col')) {
                $(this).siblings('.col-12.txt-col').children('p.onewalk-txt').fadeIn();
                $(this).siblings('.col-12.txt-col').children().not('p.onewalk-txt').fadeOut();
            }
        });
      }
    },
    // About Work Page
    'about': {
      init: function() {
        // JavaScript to be fired on the about us page
        var alexBio = {
            name: 'Alex Baxter',
            title: 'CEO',
            bio: 'Alex Baxter is the President and Chief Executive Officer of OmniForce, an experiential marketing technology company that produces experiences and events that excite audiences and drive results for charitable organizations brands. CauseForce is based in Los Angeles, CA. A senior digital media and technology executive, with a data and analytics-based perspective on decision making, Baxter brings years of leadership experience within digital, media and live event/entertainment organizations. Prior to CauseForce, he served as Chief Executive Officer of RGM Group, a private equity backed digital media and ad technology business that creates and monetizes advertising opportunities on digital properties like OpenTable and GrubHub/Seamless. Other roles include Chief Digital Officer at private equity backed Competitor Group, Vice President and General Manager, Digital for Condé Nast’s PARADE Publications, Executive Director of Digital Media at Wenner Media (Rolling Stone, US Weekly and Men’s Journal) and Director of Internet Sales & Marketing at News Corporation for The Wall Street Journal’s vertical network of digital properties. Mr. Baxter lives in Los Angeles with his wife, Amanda and daughter, Sophia. He holds an MBA from Columbia Business School and a BS, BA and Honorary Doctorate from Southern Wesleyan University.',
            linkedIn: 'https://www.linkedin.com/in/alex-baxter-2334294'
        };
        var bevBio = {
            name: 'Bev Deeth',
            title: 'Senior Vice President & General Manager',
            bio: 'Bev Deeth is Senior Vice President & General Manager of CauseForce in Canada, leading the areas of event operations, client management, sales, sponsorship, marketing, production, and event execution. Based in the Toronto office, Bev oversees staff and events in Toronto, Montreal, Vancouver, and Calgary. A philanthropic specialist recognized for developing strong and engaged coalitions that achieve optimal outcomes, Bev has led community engagement for organizations that include Companies Committed to Kids, Maple Leaf Sports & Entertainment, the Raptors Foundation, the Sunnybrook Foundation, and a number of community-focused boards. She joins CauseForce after serving eight years as President of Companies Committed to Kids, a national not-for-profit organization and model of corporate social responsibility that tapped innovative social marketing and education to provide solutions to pressing issues facing Canadian children and families. Prior to that, Bev’s leadership was instrumental in helping the Raptors Foundation, a new charitable organization, receive honours as the most successful foundation in the National Basketball Association during its formative years. Bev and her staff executed 300 community outreach events a year across Canada. A graduate of the University of Western Ontario, Bev and her husband Tom are the parents of two daughters and reside in Toronto.',
            linkedIn: 'https://ca.linkedin.com/in/bev-deeth-3b90a313'
        };
        var julieBio = {
            name: 'Julie Winfield',
            title: 'Chief Financial Officer & Chief Operating Officer',
            bio: 'As Chief Financial Officer, Julie leads the financial operations of the business as well as domestic & international tax, banking, treasury, compliance, human resources, information technology, legal, as well as serves as the Board of Directors Treasurer. She has over 25 years of experience building, leading, and advising companies with a track record of proven success ensuring financial and operational accountability and effective risk management in manufacturing, distribution and service organizations. Prior to joining CauseForce in 2014, Julie was the Chief Financial Officer of Luminance/Hallmark Lighting, a private equity backed international lighting company that designs, manufactures and distributes OEM lighting for the construction industry as well as custom lighting for 5-star hotels across the globe. Other roles include VP, Corporate Controller of Harbor Freight Tools, Director of Accounting and Compliance Pharmavite “Nature Made Vitamins” (largest subsidiary of Otsuka the largest privately held pharmaceutical company in the world), VP Risk Management Fountain View (Skilled Healthcare) and SEC Reporting Manager for Wellpoint Health Networks (Anthem Blue Cross). Julie also began her career with Deloitte an international accounting firm. Julie lives in Los Angeles with her husband Dylan and son, Luke. Julie also serves on the Board of the Women‘s Leadership Council of Los Angeles and is a Certified Public Accountant.',
            linkedIn: 'https://www.linkedin.com/in/julie-winfield-cpa-a00820b'
        };
        var willBio = {
            name: 'Will Kirsop',
            title: 'General Manager CauseForce Australia',
            bio: 'Will is the General Manager of CauseForce in Australia, and oversees CauseForce’s signature events, P2P Fundraising and logistics services in Australia. Ever since Will raised over $2,000 for the 40 Hour Famine at the tender age of 7, Will has been passionate about and involved in driving social change through fundraising. His professional fundraising career began at 2Evolve where he led teams to success for globally recognised clients including Amnesty International, WSPA, and Save the Children.' + '<br/><br/>' + 'Will joined CauseForce in 2012, and led the first ever Sydney event to raise a record-breaking $5.7 million. Since then, Will has held a number of leadership positions across the sales and marketing functions in both Australia and North America. In 2016, Will was recognised for his impact in the fundraising sector by receiving the prestigious Queensland Young Fundraiser of the Year award by the FIA. In 2017, Will worked as part of a team of Management Consultants at Blackdot, who spear-headed the design and implementation of a customer-centric marketing and sales operating model for a major international media company. Will co-founded a social business, Society&Co, where 100% of the profits are used to create social and environmental change. In his spare time, Will can be found in the ocean surfing or traveling the globe in pursuit of perfect waves.' + '<br/><br/>' +
            'Will holds a B. Comm in Finance and Accounting from the University of Sydney.',
            linkedIn: 'https://au.linkedin.com/in/willkirsop'
        };
        var rebelBio = {
            name: 'Rebel Neary',
            title: 'Vice President of Marketing',
            bio: 'As head of marketing for the company and its event platforms, Rebel Neary is responsible for the innovation around consumer efforts and the creation of new brands. She oversees traditional media, digital marketing, communications, technology and campaigns that help drive new customer acquisition, participant engagement, and the retention rates earned and experienced by CauseForce brands. Rebel’s team works with multiple technology vendors, sourcing partners, media buyers, and local general managers to customize marketing efforts and deliver on the P&L for each event.' + '<br/><br/>' + 'Rebel has over 17 years Marketing experience across USA, Canada and Australia. As a former political strategist at Burson Marsteller and Experiential Marketer at Tourism Australia, Rebel knows how motivate target audiences to take action. As part of the Causefore team since 2012, Rebel has lead marketing efforts across four countries and 25 event brands raising millions of dollars for our non-profit partners. Rebel is an expert in cause-related digital activations, grass-roots mobilization, integrated media strategy and leading teams to implement innovative, scalable strategies to fuel expansion.' + '<br/><br/>' + 'Rebel lives in the Hollywood Hills with her wife Michelle and two dogs. Rebel has a law degree from the University of Technology, Sydney.',
            linkedIn: 'https://www.linkedin.com/in/rebelneary'
        };
        var robbyBio = {
            name: 'Robby Facer',
            title: 'Director of Marketing and Paid Media',
            bio: 'A self-proclaimed brand marketing nerd, Robby started his career a bright-eyed college grad from Salt Lake City, ready to take on the world. That world took him first to Pittsburgh, working in the visual and creative department for American Eagle Outfitters where he first learned that brand storytelling meant truly understanding how a consumer interacts and engages with a product. He went on to work for American Eagle out of New York, eventually putting on his big boy shoes and taking a leap of faith to oversee Retail Marketing for Adidas America in Portland. Becoming fixated on ways to blend the physical and digital world for the consumer, Adidas offered Robby the chance to build stronger, more intimate and engaging relationships with consumer brand advocates across mobile, digital, grassroots and traditional marketing channels. Knowing the sun was calling his name, Robby left the rain of Portland behind, heading to Los Angeles to lead the creative evolution for brand experience at Guess? Inc.' + '<br/><br/>' + 'In 2016, Robby began a new chapter of his brand-ccentric life as a marketer, moving into the non-profit sector and currently serves as the Director of Marketing and Paid Media for CauseForce. He lives in West Hollywood with his dog Cole.',
            linkedIn: 'https://www.linkedin.com/in/robby-facer-b33a034/'
        };
        var patBio = {
            name: 'Patrick Barkhordarian',
            title: 'Vice President of Partnerships',
            bio: 'As head of Partnerships for CauseForce, Patrick is responsible for driving strategic partnerships and collaborations that inspire, motivate, and energize the next generation of donors. In this capacity, he works directly with nonprofits to identify areas of opportunity through innovation.' + '<br/><br/>' + 'Prior to this role, Patrick served on the executive team at an industry leading consulting firm specializing in cause marketing and corporate social responsibility. Developing innovative strategic alliances between blue chip brands and nonprofits to drive reach and revenue for clients and partners.' + '<br/><br/>' + 'A lifelong Los Angeles native, Patrick earned his BA from the University of California Los Angeles.',
            linkedIn: 'https://www.linkedin.com/in/pbarkhordarian/'
        };
        var joBio = {
            name: 'Joseph Hartman',
            title: 'Art Director',
            bio: 'Jo thoroughly embraces the process of communicating through creative problem solving. As Art Director at CauseForce they lead the creative team through the process of design, copy writing, and video production. Joseph works with cross-functional teams to develop new event concepts and expand existing brands through new acquisitions programs while ensuring core brand identities are adhered to. Sustaining the vigorous production level of the Creative Team through time management and motivation is one of Jo’s strengths, but the part they love the most about working as an Art Director is helping other creatives to grow, strengthen skills, and find their specialties.' + '<br><br>' + 'Currently living in Los Angeles, Joseph is an experienced arts & design professional skilled in Fine Arts influenced Layouts, Logo Design, Branding & Identity, Advertising, and Typography. While their current focus is in the graphic design industry, Jo has experience with and a strong passion for many different forms of visual arts such as painting, sculpture, printmaking, installation and animation. They are currently working with co-founder Zelda English, a photographer and curator in Oregon, in establishing the WAKE gallery in Astoria’s historic downtown area. Jo has studied at Pratt Institute, California Institute of the Arts, Rhode Island School of Design and has a BFA in Graphic Design from ArtCenter College of Design in Pasadena.',
            linkedIn: 'https://www.linkedin.com/in/joseph-hartman-82510125/'
        };
        var julianBio = {
            name: 'Julian Brown',
            title: 'Director of Event Production',
            bio: 'Julian is an events professional with over 5 years of industry experience. Julian’s experience is diverse ranging from intimate group events to large scale multi day fundraisers. Included in this are running events (5K, 10K, ½ and Full Marathons), Urban Obstacle Courses, Cycling challenges, Pro-Am’s, Hockey Tournaments, Galas, and banquets. Having worked on events in Canada, Australia, New Zealand and the USA, Julian has a broad perspective on the complexities of various markets and a solid foundation of best practices to handle any challenges.  With a portfolio that includes the Ride to Conquer Cancer and OneWalk to Conquer Cancer Julian is no stranger to large events that are geared towards exceptional participant experiences. In his years with CauseForce Julian has worked on more than 50 events in the non-profit space including more than 30 Ride to Conquer Cancer events in 4 countries. Julian believes in transformative events that feature strong safety components and outstanding participant experiences.',
            linkedIn: 'https://www.linkedin.com/in/julianjamesbrown'
        };
        var gregBio = {
            name: 'Gregory Shin',
            title: 'Manager of Digital Development',
            bio: 'Greg is a veteran front-end developer turned development manager. When he\'s not leading his talented team of developers in creating innovative web solutions, or collaborating with the CauseForce designers to brainstorm unique online experiences, he can be found in his kitchen, experimenting with new recipes to add to his ever-growing repertoire.',
            linkedIn: 'https://www.linkedin.com/in/gregory-shin-73082115'
        };
        var ailishBio = {
            name: 'Ailish Steele',
            title: 'Director of Communications',
            bio: 'Ailish is the Director of Communications, holding responsibility to lead Internal and External Communications for CauseForce, and its brands and clients. With responsibility to continue to develop and advance Communications strategies and tactics, Ailish’s skillset is heightened within Media Relations, Client and Partner Relations, and Proactive and Reactive Messaging, through a decade long role within the CauseForce Communications Department. Ailish’s team drives top-tier traditional and non-traditional media coverage, executes and manages social media platforms to highlight marketing campaigns and localized content, all while showcasing the stories behind the brands.' + '<br><br>'+ 'Joining CauseForce in January 2009 as Communications Intern, Ailish continued to advance her responsibility within the Canadian Communications department. In October 2012, Ailish was granted the opportunity to help build the Communications strategies for Australian and US markets, taking on global responsibility. Advancing to Director in January 2016, Ailish has molded the Communications team to thrive on a front-page news story and land blockbuster media coverage across the globe, while raising awareness of life-changing experiences and transformational dollars for facilities across the world.' +'<br><br>'+ 'Ailish currently resides in Toronto and holds a Honours Bachelor of Applied Arts in Media Studies and a Diploma in Media Communications, from the University of Guelph-Humber.',
            linkedIn: 'https://www.linkedin.com/in/ailish-steele-0790571a'
        };
        var aboutName = '#aboutModal .about-name';
        var aboutTitle = '#aboutModal .about-title';
        var aboutBio = '#aboutModal .about-bio';
        $('#about .row-04 .col-md-3').on('click', function(){
            if ($(this).children('a').text() === 'Alex Baxter') {
                $(aboutName).html(alexBio.name);
                $(aboutTitle).html(alexBio.title);
                $(aboutBio).html(alexBio.bio);
                $('.linkedIn').attr('href', alexBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Julie Winfield') {
                $(aboutName).html(julieBio.name);
                $(aboutTitle).html(julieBio.title);
                $(aboutBio).html(julieBio.bio);
                $('.linkedIn').attr('href', julieBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Bev Deeth') {
                $(aboutName).html(bevBio.name);
                $(aboutTitle).html(bevBio.title);
                $(aboutBio).html(bevBio.bio);
                $('.linkedIn').attr('href', bevBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Will Kirsop') {
                $(aboutName).html(willBio.name);
                $(aboutTitle).html(willBio.title);
                $(aboutBio).html(willBio.bio);
                $('.linkedIn').attr('href', willBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Rebel Neary') {
                $(aboutName).html(rebelBio.name);
                $(aboutTitle).html(rebelBio.title);
                $(aboutBio).html(rebelBio.bio);
                $('.linkedIn').attr('href', rebelBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Robby Facer') {
                $(aboutName).html(robbyBio.name);
                $(aboutTitle).html(robbyBio.title);
                $(aboutBio).html(robbyBio.bio);
                $('.linkedIn').attr('href', robbyBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Patrick Barkhordarian') {
                $(aboutName).html(patBio.name);
                $(aboutTitle).html(patBio.title);
                $(aboutBio).html(patBio.bio);
                $('.linkedIn').attr('href', patBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Julian Brown') {
                $(aboutName).html(julianBio.name);
                $(aboutTitle).html(julianBio.title);
                $(aboutBio).html(julianBio.bio);
                $('.linkedIn').attr('href', julianBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Gregory Shin') {
                $(aboutName).html(gregBio.name);
                $(aboutTitle).html(gregBio.title);
                $(aboutBio).html(gregBio.bio);
                $('.linkedIn').attr('href', gregBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Ailish Steele') {
                $(aboutName).html(ailishBio.name);
                $(aboutTitle).html(ailishBio.title);
                $(aboutBio).html(ailishBio.bio);
                $('.linkedIn').attr('href', ailishBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Joseph Hartman') {
                $(aboutName).html(joBio.name);
                $(aboutTitle).html(joBio.title);
                $(aboutBio).html(joBio.bio);
                $('.linkedIn').attr('href', joBio.linkedIn);
                $('#aboutModal .col-md-5 img').attr('src', $(this).children('img').attr('src'));
            }
        });
      }
    },
    //solutions
    'solutions': {
      init: function() {



      },
      finalize: function() {

        // delayed animated columns
        function animateColumns(className) {
          $(''+className+'-learn-more').removeClass('disp-none animated fadeOut');
          $(''+className+'-slide-1').addClass('animated fadeInUp');
          $(''+className+'-slide-2').delay(200).queue(function(){
            $(this).addClass('animated fadeInUp').clearQueue();
          });
          $(''+className+'-slide-3').delay(400).queue(function(){
            $(this).addClass('animated fadeInUp').clearQueue();
          });
          $(''+className+'-slide-4').delay(600).queue(function(){
            $(this).addClass('animated fadeInUp').clearQueue();
          });                     
        }

        function closeAnimatedColumns(className) {
          $(''+className+'-learn-more').addClass('disp-none animated fadeOut');
          $(''+className+'-slide-1,'+className+'-slide-2,'+className+'-slide-3,'+className+'-slide-4').removeClass('animated fadeInUp');
        }

        // marketing row
        $(".marketing-btn-opn").on('click', function(e){
          e.preventDefault();
          animateColumns(".marketing");
        });

       $('.close-marketing').on('click', function(e){
          e.preventDefault();
          closeAnimatedColumns(".marketing");
        });

        // fundraising row
        $(".fundraise-btn-opn").on('click', function(e){
          e.preventDefault();
          animateColumns(".fundraise");
        });

       $('.close-fundraise').on('click', function(e){
          e.preventDefault();
          closeAnimatedColumns(".fundraise");
        });  

        // events row
        $(".events-btn-opn").on('click', function(e){
          e.preventDefault();
          animateColumns(".events");
        });

       $('.close-events').on('click', function(e){
          e.preventDefault();
          closeAnimatedColumns(".events");
        });                          
 
        $('.consulting-row').waypoint(function(){
            $('.consult-img-col').addClass('animated fadeInRight');
            $('.consult-text-col').addClass('animated fadeInRight');
            },
            { 
            offset: '85%'
            });        

        
      }
    },
    'newhome': {
        init: function() {



      },
      finalize: function() {        
        var figure = $(".video").hover( hoverVideo, hideVideo );

        function hoverVideo(e) {  
            $('video', this).get(0).play(); 
        }

        function hideVideo(e) {
            $('video', this).get(0).pause(); 
        }

      }
    }


  };

  // The routing fires all common scripts, followed by the page specific scripts.
  // Add additional events for more control over timing e.g. a finalize event
  var UTIL = {
    fire: function(func, funcname, args) {
      var fire;
      var namespace = Sage;
      funcname = (funcname === undefined) ? 'init' : funcname;
      fire = func !== '';
      fire = fire && namespace[func];
      fire = fire && typeof namespace[func][funcname] === 'function';

      if (fire) {
        namespace[func][funcname](args);
      }
    },
    loadEvents: function() {
      // Fire common init JS
      UTIL.fire('common');

      // Fire page-specific init JS, and then finalize JS
      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
        UTIL.fire(classnm);
        UTIL.fire(classnm, 'finalize');
      });

      // Fire common finalize JS
      UTIL.fire('common', 'finalize');
    }
  };

  // Load Events
  $(document).ready(UTIL.loadEvents);

})(jQuery); // Fully reference jQuery after this point.
