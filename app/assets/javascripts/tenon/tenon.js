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

    // init tooltips
    $(document).tooltip({
      selector: '[data-tooltip]',
      container: 'body'
    });

    // init popovers
    $('[data-popover]').popover({
      trigger: 'focus'
    });

    // init select2
    $('select').select2();

    $('.nav-pusher').on('click', function(e) {
      if ($(e.target).is('.toggle-nav, .toggle-nav *')) return;
      $('body').removeClass('nav-open');
    });

    Tenon.features.fileSelectWidget.init();
    new Tenon.features.I18nFields();
    new Tenon.features.Flash();
    new Tenon.features.AssetCropping();
    new Tenon.features.AssetDetachment();
    new Tenon.features.CocoonHooks();
    new Tenon.features.FocusFirstField();
    new Tenon.features.MainMenu();
    new Tenon.features.Pagination();
    new Tenon.features.HamburgerNavigation();
    new Tenon.features.HeaderMenu();
    new Tenon.features.QuickSearch();
    new Tenon.features.DateTimePicker();
    new Tenon.features.ItemVersionAutosave();
    Tenon.modals = new Tenon.features.ModalWindows();
    new Tenon.features.ModalForms();
    new Tenon.features.ProtectChanges();
    new Tenon.features.RecordApproval();
    new Tenon.features.RecordBooleanToggle();
    new Tenon.features.SidebarActiveLinks();
    new Tenon.features.SidebarNavigation();
    new Tenon.features.SortableNestedFields();
    new Tenon.features.videoFeeds();
    new Tenon.features.tenonContent.Base();
    new Tenon.features.GenericClassToggler


    Tenon.dispatcher.initialize();
  }

};
