var metric
  , imperial;

metric = {
  'C-day': {
    name: {
      singular: 'degree day Celsius'
    , plural: 'degrees day Celsius'
    }
  , to_anchor: 1
  , anchor_shift: 0
  }
};

imperial = {
  'F-day': {
    name: {
      singular: 'degree day Fahrenheit'
    , plural: 'degrees day Fahrenheit'
    }
  , to_anchor: 1
  }
};

module.exports = {
  metric: metric
, imperial: imperial
, _anchors: {
    metric: {
      unit: 'C-day'
    , transform: function (C) { return C / (5/9) }
    }
  , imperial: {
      unit: 'F-day'
    , transform: function (F) { return F * (5/9) }
    }
  }
};

