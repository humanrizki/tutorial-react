const root = document.querySelector('#root');

const App = function () {
  const [count, setCount] = React.useState(1);
  const [click, setClick] = React.useState(false);
  React.useEffect(function () {
    console.log(document.querySelector('.heading-pertama'));
  }, [count]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "heading-pertama"
  }, "Ini judul document"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("h1", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setCount(count + 1);
    }
  }, "+"), /*#__PURE__*/React.createElement("button", {
    onClick: setClick.bind(this, false)
  }, "Nilai jadi false"));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);