"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _default(_x, _x2) {
  return _ref.apply(this, arguments);
}

function _ref() {
  _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(context, req) {
    var name;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            context.log('TypeScript HTTP trigger function processed a request.');
            name = req.query["name"] || req.body["name"];

            if (!name) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", {
              res: {
                status: 200,
                body: "Hello there ".concat(name)
              }
            });

          case 6:
            return _context.abrupt("return", {
              res: {
                status: 400,
                body: "You need to provide a name"
              }
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}

;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL21haW4vaW5kZXgudHMiXSwibmFtZXMiOlsiY29udGV4dCIsInJlcSIsImxvZyIsIm5hbWUiLCJxdWVyeSIsImJvZHkiLCJyZXMiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7aUVBR2UsaUJBQWVBLE9BQWYsRUFBaUNDLEdBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNYRCxZQUFBQSxPQUFPLENBQUNFLEdBQVIsQ0FBWSx1REFBWjtBQUVNQyxZQUFBQSxJQUhLLEdBR0VGLEdBQUcsQ0FBQ0csS0FBSixDQUFVLE1BQVYsS0FBcUJILEdBQUcsQ0FBQ0ksSUFBSixDQUFTLE1BQVQsQ0FIdkI7O0FBQUEsaUJBSVBGLElBSk87QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBS0E7QUFDSEcsY0FBQUEsR0FBRyxFQUFFO0FBQ0hDLGdCQUFBQSxNQUFNLEVBQUUsR0FETDtBQUVIRixnQkFBQUEsSUFBSSx3QkFBaUJGLElBQWpCO0FBRkQ7QUFERixhQUxBOztBQUFBO0FBQUEsNkNBYUE7QUFDTEcsY0FBQUEsR0FBRyxFQUFFO0FBQ0hDLGdCQUFBQSxNQUFNLEVBQUUsR0FETDtBQUVIRixnQkFBQUEsSUFBSSxFQUFFO0FBRkg7QUFEQSxhQWJBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFvQmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwUmVxdWVzdCwgQ29udGV4dCB9IGZyb20gXCJAYXp1cmUvZnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gXCIuL3R5cGVzL2F6LWZ1bmN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKGNvbnRleHQ6IENvbnRleHQsIHJlcTogSHR0cFJlcXVlc3QpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gICAgY29udGV4dC5sb2coJ1R5cGVTY3JpcHQgSFRUUCB0cmlnZ2VyIGZ1bmN0aW9uIHByb2Nlc3NlZCBhIHJlcXVlc3QuJyk7XG5cbiAgICBjb25zdCBuYW1lID0gcmVxLnF1ZXJ5W1wibmFtZVwiXSB8fCByZXEuYm9keVtcIm5hbWVcIl07XG4gICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlczoge1xuICAgICAgICAgICAgICBzdGF0dXM6IDIwMCxcbiAgICAgICAgICAgICAgYm9keTogYEhlbGxvIHRoZXJlICR7bmFtZX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcmVzOiB7XG4gICAgICAgICAgICBzdGF0dXM6IDQwMCxcbiAgICAgICAgICAgIGJvZHk6IFwiWW91IG5lZWQgdG8gcHJvdmlkZSBhIG5hbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbn07Il19