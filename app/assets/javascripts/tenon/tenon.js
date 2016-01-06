$.ajaxSetup({
  dataType: 'json',
  'beforeSend' : function(xhr){
    xhr.setRequestHeader("Accept", "application/json");
  }
});

var Tenon = {

  features: {},
  helpers: {},

  init: function() {
    Tenon.refreshed = true;

    // setup generic loader
    Tenon.$genericLoader = $('.generic-loader');

    // init select2
    // $('select').select2();

    // init pickadate
    $('[data-behavior=datepicker]').pickadate();
    $('[data-behavior=timepicker]').pickatime();

    Tenon.features.fileSelectWidget.init();
    new Tenon.features.I18nFields();
    new Tenon.features.Flash();
    new Tenon.features.AssetCropping();
    new Tenon.features.AssetDetachment();
    new Tenon.features.CocoonHooks();
    new Tenon.features.FocusFirstField();
    new Tenon.features.Pagination();
    new Tenon.features.HeaderMenu();
    new Tenon.features.ItemVersionAutosave();
    Tenon.modals = new Tenon.features.ModalWindows();
    new Tenon.features.ModalForms();
    new Tenon.features.ProtectChanges();
    new Tenon.features.SidebarActiveLinks();
    new Tenon.features.SidebarNavigation();
    new Tenon.features.SortableNestedFields();
    new Tenon.features.videoFeeds();
    new Tenon.features.tenonContent.Base();
    new Tenon.features.GenericClassToggler();
    new Tenon.features.ToggleMainNav();
    new Tenon.features.NavItemToggle();

    // TODO: click hacked - should probably be moved.
    $(document).on('click', '.panel.record', function (e) {
      $target = $(e.currentTarget);

      if ($target.hasClass('is-expanded')) {

        $target
          .removeClass('is-expanded')
          .find('.record-expanded')
            .slideUp(300);
      } else {
        $('.panel.record')
          .removeClass('is-expanded')
          .find('.record-expanded')
            .slideUp(300);
        $target
          .addClass('is-expanded')
          .find('.record-expanded')
            .slideDown(300);
      }
    });

  }

};
