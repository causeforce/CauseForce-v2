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
//            $('.gray-row').fadeToggle();
            $('.square').addClass('show');
            $('#graph').addClass('show');
            }, { 
                offset: '65%'
        });
        $(".col-pic-row").waypoint(function(){
            $('.text-col').addClass('show');
            }, { 
                offset: 'bottom-in-view'
        });       
        $(".col-pic-row").waypoint(function(){
            $('.picture-col').addClass('show');
            }, { 
                offset: '65%'
        });
        $(".ready-row").waypoint(function(){
            $('.talk-col').addClass('show');
            }, { 
                offset: 'bottom-in-view'
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
            bio: 'Alex Baxter is the President and Chief Executive Officer of OmniForce, an experiential marketing technology company that produces experiences and events that excite audiences and drive results for charitable organizations brands. CauseForce is based in Los Angeles, CA. A senior digital media and technology executive, with a data and analytics-based perspective on decision making, Baxter brings years of leadership experience within digital, media and live event/entertainment organizations. Prior to CauseForce, he served as Chief Executive Officer of RGM Group, a private equity backed digital media and ad technology business that creates and monetizes advertising opportunities on digital properties like OpenTable and GrubHub/Seamless. Other roles include Chief Digital Officer at private equity backed Competitor Group, Vice President and General Manager, Digital for Condé Nast’s PARADE Publications, Executive Director of Digital Media at Wenner Media (Rolling Stone, US Weekly and Men’s Journal) and Director of Internet Sales & Marketing at News Corporation for The Wall Street Journal’s vertical network of digital properties. Mr. Baxter lives in Los Angeles with his wife, Amanda and daughter, Sophia. He holds an MBA from Columbia Business School and a BS, BA and Honorary Doctorate from Southern Wesleyan University.'
        };
        var bevBio = {
            name: 'Bev Deeth',
            title: 'Senior Vice President & General Manager',
            bio: 'Bev Deeth is Senior Vice President & General Manager of CauseForce in Canada, leading the areas of event operations, client management, sales, sponsorship, marketing, production, and event execution. Based in the Toronto office, Bev oversees staff and events in Toronto, Montreal, Vancouver, and Calgary. A philanthropic specialist recognized for developing strong and engaged coalitions that achieve optimal outcomes, Bev has led community engagement for organizations that include Companies Committed to Kids, Maple Leaf Sports & Entertainment, the Raptors Foundation, the Sunnybrook Foundation, and a number of community-focused boards. She joins CauseForce after serving eight years as President of Companies Committed to Kids, a national not-for-profit organization and model of corporate social responsibility that tapped innovative social marketing and education to provide solutions to pressing issues facing Canadian children and families. Prior to that, Bev’s leadership was instrumental in helping the Raptors Foundation, a new charitable organization, receive honours as the most successful foundation in the National Basketball Association during its formative years. Bev and her staff executed 300 community outreach events a year across Canada. A graduate of the University of Western Ontario, Bev and her husband Tom are the parents of two daughters and reside in Toronto.'
        };
        var julieBio = {
            name: 'Julie Winfield',
            title: 'Chief Financial Officer & Chief Operating Officer',
            bio: 'As Chief Financial Officer, Julie leads the financial operations of the business as well as domestic & international tax, banking, treasury, compliance, human resources, information technology, legal, as well as serves as the Board of Directors Treasurer. She has over 25 years of experience building, leading, and advising companies with a track record of proven success ensuring financial and operational accountability and effective risk management in manufacturing, distribution and service organizations. Prior to joining CauseForce in 2014, Julie was the Chief Financial Officer of Luminance/Hallmark Lighting, a private equity backed international lighting company that designs, manufactures and distributes OEM lighting for the construction industry as well as custom lighting for 5-star hotels across the globe. Other roles include VP, Corporate Controller of Harbor Freight Tools, Director of Accounting and Compliance Pharmavite “Nature Made Vitamins” (largest subsidiary of Otsuka the largest privately held pharmaceutical company in the world), VP Risk Management Fountain View (Skilled Healthcare) and SEC Reporting Manager for Wellpoint Health Networks (Anthem Blue Cross). Julie also began her career with Deloitte an international accounting firm. Julie lives in Los Angeles with her husband Dylan and son, Luke. Julie also serves on the Board of the Women‘s Leadership Council of Los Angeles and is a Certified Public Accountant.'
        };
        var willBio = {
            name: 'Will Kirsop',
            title: 'General Manager CauseForce Australia',
            bio: 'Will is the General Manager of CauseForce in Australia, and oversees CauseForce’s signature events, P2P Fundraising and logistics services in Australia. Ever since Will raised over $2,000 for the 40 Hour Famine at the tender age of 7, Will has been passionate about and involved in driving social change through fundraising. His professional fundraising career began at 2Evolve where he led teams to success for globally recognised clients including Amnesty International, WSPA, and Save the Children.' + '<br/><br/>' + 'Will joined CauseForce in 2012, and led the first ever Sydney event to raise a record-breaking $5.7 million. Since then, Will has held a number of leadership positions across the sales and marketing functions in both Australia and North America. In 2016, Will was recognised for his impact in the fundraising sector by receiving the prestigious Queensland Young Fundraiser of the Year award by the FIA. In 2017, Will worked as part of a team of Management Consultants at Blackdot, who spear-headed the design and implementation of a customer-centric marketing and sales operating model for a major international media company. Will co-founded a social business, Society&Co, where 100% of the profits are used to create social and environmental change. In his spare time, Will can be found in the ocean surfing or traveling the globe in pursuit of perfect waves.' + '<br/><br/>' +
            'Will holds a B. Comm in Finance and Accounting from the University of Sydney.'
        };
        var rebelBio = {
            name: 'Rebel Neary',
            title: 'SVP Marketing',
            bio: 'As head of marketing for the company and its event platforms, Rebel Neary is responsible for the innovation around consumer efforts and the creation of new brands. She oversees traditional media, digital marketing, communications, technology and campaigns that help drive new customer acquisition, participant engagement, and the retention rates earned and experienced by CauseForce brands. Rebel’s team works with multiple technology vendors, sourcing partners, media buyers, and local general managers to customize marketing efforts and deliver on the P&L for each event.' + '<br/><br/>' + 'Rebel has over 17 years Marketing experience across USA, Canada and Australia. As a former political strategist at Burson Marsteller and Experiential Marketer at Tourism Australia, Rebel knows how motivate target audiences to take action. As part of the Causefore team since 2012, Rebel has lead marketing efforts across four countries and 25 event brands raising millions of dollars for our non-profit partners. Rebel is an expert in cause-related digital activations, grass-roots mobilization, integrated media strategy and leading teams to implement innovative, scalable strategies to fuel expansion.' + '<br/><br/>' + 'Rebel lives in the Hollywood Hills with her wife Michelle and two dogs. Rebel has a law degree from the University of Technology, Sydney.'
        };
        var aboutName = '#aboutModal .about-name';
        var aboutTitle = '#aboutModal .about-title';
        var aboutBio = '#aboutModal .about-bio';
        $('.row-04 .col-md-3').on('click', function(){
            if ($(this).children('a').text() === 'Alex Baxter') {
                $(aboutName).html(alexBio.name);
                $(aboutTitle).html(alexBio.title);
                $(aboutBio).html(alexBio.bio);
                $('#aboutModal img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Julie Winfield') {
                $(aboutName).html(julieBio.name);
                $(aboutTitle).html(julieBio.title);
                $(aboutBio).html(julieBio.bio);
                $('#aboutModal img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Bev Deeth') {
                $(aboutName).html(bevBio.name);
                $(aboutTitle).html(bevBio.title);
                $(aboutBio).html(bevBio.bio);
                $('#aboutModal img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Will Kirsop') {
                $(aboutName).html(willBio.name);
                $(aboutTitle).html(willBio.title);
                $(aboutBio).html(willBio.bio);
                $('#aboutModal img').attr('src', $(this).children('img').attr('src'));
            } else if ($(this).children('a').text() === 'Rebel Neary') {
                $(aboutName).html(rebelBio.name);
                $(aboutTitle).html(rebelBio.title);
                $(aboutBio).html(rebelBio.bio);
                $('#aboutModal img').attr('src', $(this).children('img').attr('src'));
            }
        });
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
