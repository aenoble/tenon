class Tenon.features.tenonContent.Base
  constructor: ->
    $container = $('.tenon-content')
    new Tenon.features.tenonContent.Aesthetics($container)
    new Tenon.features.tenonContent.BottombarToggler($container)
    new Tenon.features.tenonContent.CaptionToggler($container)
    new Tenon.features.tenonContent.ColumnSizing($container)
    new Tenon.features.tenonContent.ColumnSwap($container)
    new Tenon.features.tenonContent.Editor($container)
    new Tenon.features.tenonContent.ImageControls($container)
    new Tenon.features.tenonContent.LibraryFilter($container)
    new Tenon.features.tenonContent.PopOut($container)
    new Tenon.features.tenonContent.Sortable($container)
    new Tenon.features.tenonContent.WrappedSizing($container)