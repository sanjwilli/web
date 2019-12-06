$(document).ready(function() {

  $('.toggled-nav-wrapper').on('click', function(e) {
    e.stopPropagation();
  });
  $('.nav-toggle-open-wrapper, .nav-toggle-close-wrapper, header .nav-toggle-body-overlay').on('click', function() {
    $('html').toggleClass('nav-open');
  });

  $('.nav-toggle-open-wrapper').on('click', function() {
    console.log('Toggle Clciked');
  });


  $('button.arrow-down, fa-chevron-down').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#intro').offset().top
    }, 'slow');
  });

  $('.read-about-us, .read-caribbean, .read-political, .read-economy, .read-social, .read-culture').on('click', function() {

    $('html, body').animate({
      scrollTop: $('.about-us-content-wrapper, .social-content-wrapper, .caribbean-content-wrapper, .political-content-wrapper, .economy-content-wrapper, .religion-content-wrapper').offset().top
    }, 'slow');
  });

});

function scrolling() {
  console.log('function activated')
  $('html, body').animate({
    scrollTop: $('.about-us, .social-content-wrapper, .caribbean-content-wrapper, .political-content-wrapper, .economy-content-wrapper, .religion-content-wrapper').offset().top
  }, 'slow');

  // .social-content-wrapper, .caribbean-content-wrapper, .political-content-wrapper, .economy-content-wrapper, .religion-content-wrapper
}

function tableModal() {

  console.log('model was clicked');

  var modal = '<div class="dimmer page transition visible active" style="display: flex !important;">\
  <div class="fullscreen modal transition visible active" style="display: block !important;">\
  <div class="header">Table 1</div>\
  <div class="scrolling content"><table class="celled padded table">\
    <thead>\
      <tr>\
        <th>Geographical</th>\
        <th>Diasporic</th>\
        <th>Political</th>\
        <th>Historical (Revisionist)</th>\
      </tr>\
    </thead>\
    <tbody>\
      <tr>\
        <td>“… the Caribbean… based on the concept of the ‘Caribbean Basin’, where the central identifying feature is the Caribbean Sea rimmed by mainland territories of Central and South America… stretching from 60 degrees W to 90 degrees of the Greenwich Meridian… from 5 degrees N of the Equator to beyond 25 degrees N.”</td>\
        <td>“Caribbean diaspora: The word ‘diaspora’ is Greek in origin and means ‘to scatter’. In Caribbean studies, the Diasporic Caribbean refers to a group of people who reside in another geographical location, for instance, people of the Caribbean ancestry who reside in European metropolitan countries – the USA, Canada, among others- who share an emotional connection to their homeland”</td>\
        <td>“…three main political systems: 1. Independent states – these are former colonies of metropole countries which are now self-governing. These islands have chosen to govern their countries in a completely different way from that of their colonial masters, namely democracy and communism; for example Jamaica, Haiti. 2. Associated states – These countries are not independent but enjoy all rights and privileges of the countries that govern them; for example, Anguilla. 3. Colonial dependencies – These are countries which are governed by another countries but do not enjoy the rights and privileges enjoyed by the associated states; for example Turks and Caicos Islands, Bermuda, Cayman Islands and British Virgin Islands.”</td>\
        <td>“…the idea that the region shares similar historical processes, regardless of our English, Spanish, Dutch or French colonial connections. These historical processes include the occupation of the area by indigenous peoples, the genocide and war engaged against the indigenes, African slavery and indentureship, colonialism, the development of the plantation economy and plantation society, independence and forging a free society out of such experiences. Language embodies these cultural differences and presents the major distinguishing factor that delimits the Caribbean from Latin America.”</td>\
      </tr>\
    </tbody>\
    <thead>\
      <tr>\
        <th colspan="4" style="text-align: center;">Shortcomings</th>\
      </tr>\
    </thead>\
    <tbody>\
      <tr>\
        <td>“..the coordinates of longitude and latitude are interpreted subjectively. …Belize is not in the Caribbean Basin but is a large land mass in Central America and is a part of the Caribbean”</td>\
        <td>The dilemma between fact and sense of identity. Awareness of identity, where one sees themselves relative to others.</td>\
        <td>This view does not consider the majority of society and the common way of life and is particularly focused on the governance.</td>\
        <td>“In defining the Caribbean using the historical criteria, the European influence looms larger than that of the indigenous peoples, even though they were brought here later as indentured labourers.” Also the introduction of the diasporic definition with the rise in migration and Caribbean communities outside of the region.</td>\
      </tr>\
    </tbody>\
  </table>\
  </div>\
  <div class="actions">\
  <div class="red deny button js-close-modal" style="border-radius: 3px;">Close</div>\
  </div>\
  </div>\
  </div>';

  $('#modal').html(modal);
}
