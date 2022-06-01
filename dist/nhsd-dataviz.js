var nhsdviz = (function (exports) {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    var noop = {value: () => {}};

    function dispatch() {
      for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
        if (!(t = arguments[i] + "") || (t in _) || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
        _[t] = [];
      }
      return new Dispatch(_);
    }

    function Dispatch(_) {
      this._ = _;
    }

    function parseTypenames$1(typenames, types) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
        return {type: t, name: name};
      });
    }

    Dispatch.prototype = dispatch.prototype = {
      constructor: Dispatch,
      on: function(typename, callback) {
        var _ = this._,
            T = parseTypenames$1(typename + "", _),
            t,
            i = -1,
            n = T.length;

        // If no callback was specified, return the callback of the given type and name.
        if (arguments.length < 2) {
          while (++i < n) if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
          return;
        }

        // If a type was specified, set the callback for the given type and name.
        // Otherwise, if a null callback was specified, remove callbacks of the given name.
        if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
        while (++i < n) {
          if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);
          else if (callback == null) for (t in _) _[t] = set$1(_[t], typename.name, null);
        }

        return this;
      },
      copy: function() {
        var copy = {}, _ = this._;
        for (var t in _) copy[t] = _[t].slice();
        return new Dispatch(copy);
      },
      call: function(type, that) {
        if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      },
      apply: function(type, that, args) {
        if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
        for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
      }
    };

    function get$1(type, name) {
      for (var i = 0, n = type.length, c; i < n; ++i) {
        if ((c = type[i]).name === name) {
          return c.value;
        }
      }
    }

    function set$1(type, name, callback) {
      for (var i = 0, n = type.length; i < n; ++i) {
        if (type[i].name === name) {
          type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
          break;
        }
      }
      if (callback != null) type.push({name: name, value: callback});
      return type;
    }

    var xhtml = "http://www.w3.org/1999/xhtml";

    var namespaces = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: xhtml,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    };

    function namespace(name) {
      var prefix = name += "", i = prefix.indexOf(":");
      if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
      return namespaces.hasOwnProperty(prefix) ? {space: namespaces[prefix], local: name} : name; // eslint-disable-line no-prototype-builtins
    }

    function creatorInherit(name) {
      return function() {
        var document = this.ownerDocument,
            uri = this.namespaceURI;
        return uri === xhtml && document.documentElement.namespaceURI === xhtml
            ? document.createElement(name)
            : document.createElementNS(uri, name);
      };
    }

    function creatorFixed(fullname) {
      return function() {
        return this.ownerDocument.createElementNS(fullname.space, fullname.local);
      };
    }

    function creator(name) {
      var fullname = namespace(name);
      return (fullname.local
          ? creatorFixed
          : creatorInherit)(fullname);
    }

    function none() {}

    function selector(selector) {
      return selector == null ? none : function() {
        return this.querySelector(selector);
      };
    }

    function selection_select(select) {
      if (typeof select !== "function") select = selector(select);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
          if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
          }
        }
      }

      return new Selection$1(subgroups, this._parents);
    }

    // Given something array like (or null), returns something that is strictly an
    // array. This is used to ensure that array-like objects passed to d3.selectAll
    // or selection.selectAll are converted into proper arrays when creating a
    // selection; we don’t ever want to create a selection backed by a live
    // HTMLCollection or NodeList. However, note that selection.selectAll will use a
    // static NodeList as a group, since it safely derived from querySelectorAll.
    function array$1(x) {
      return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
    }

    function empty() {
      return [];
    }

    function selectorAll(selector) {
      return selector == null ? empty : function() {
        return this.querySelectorAll(selector);
      };
    }

    function arrayAll(select) {
      return function() {
        return array$1(select.apply(this, arguments));
      };
    }

    function selection_selectAll(select) {
      if (typeof select === "function") select = arrayAll(select);
      else select = selectorAll(select);

      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            subgroups.push(select.call(node, node.__data__, i, group));
            parents.push(node);
          }
        }
      }

      return new Selection$1(subgroups, parents);
    }

    function matcher(selector) {
      return function() {
        return this.matches(selector);
      };
    }

    function childMatcher(selector) {
      return function(node) {
        return node.matches(selector);
      };
    }

    var find = Array.prototype.find;

    function childFind(match) {
      return function() {
        return find.call(this.children, match);
      };
    }

    function childFirst() {
      return this.firstElementChild;
    }

    function selection_selectChild(match) {
      return this.select(match == null ? childFirst
          : childFind(typeof match === "function" ? match : childMatcher(match)));
    }

    var filter = Array.prototype.filter;

    function children() {
      return Array.from(this.children);
    }

    function childrenFilter(match) {
      return function() {
        return filter.call(this.children, match);
      };
    }

    function selection_selectChildren(match) {
      return this.selectAll(match == null ? children
          : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
    }

    function selection_filter(match) {
      if (typeof match !== "function") match = matcher(match);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
          if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
            subgroup.push(node);
          }
        }
      }

      return new Selection$1(subgroups, this._parents);
    }

    function sparse(update) {
      return new Array(update.length);
    }

    function selection_enter() {
      return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
    }

    function EnterNode(parent, datum) {
      this.ownerDocument = parent.ownerDocument;
      this.namespaceURI = parent.namespaceURI;
      this._next = null;
      this._parent = parent;
      this.__data__ = datum;
    }

    EnterNode.prototype = {
      constructor: EnterNode,
      appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
      insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
      querySelector: function(selector) { return this._parent.querySelector(selector); },
      querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
    };

    function constant$2(x) {
      return function() {
        return x;
      };
    }

    function bindIndex(parent, group, enter, update, exit, data) {
      var i = 0,
          node,
          groupLength = group.length,
          dataLength = data.length;

      // Put any non-null nodes that fit into update.
      // Put any null nodes into enter.
      // Put any remaining data into enter.
      for (; i < dataLength; ++i) {
        if (node = group[i]) {
          node.__data__ = data[i];
          update[i] = node;
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }

      // Put any non-null nodes that don’t fit into exit.
      for (; i < groupLength; ++i) {
        if (node = group[i]) {
          exit[i] = node;
        }
      }
    }

    function bindKey(parent, group, enter, update, exit, data, key) {
      var i,
          node,
          nodeByKeyValue = new Map,
          groupLength = group.length,
          dataLength = data.length,
          keyValues = new Array(groupLength),
          keyValue;

      // Compute the key for each node.
      // If multiple nodes have the same key, the duplicates are added to exit.
      for (i = 0; i < groupLength; ++i) {
        if (node = group[i]) {
          keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
          if (nodeByKeyValue.has(keyValue)) {
            exit[i] = node;
          } else {
            nodeByKeyValue.set(keyValue, node);
          }
        }
      }

      // Compute the key for each datum.
      // If there a node associated with this key, join and add it to update.
      // If there is not (or the key is a duplicate), add it to enter.
      for (i = 0; i < dataLength; ++i) {
        keyValue = key.call(parent, data[i], i, data) + "";
        if (node = nodeByKeyValue.get(keyValue)) {
          update[i] = node;
          node.__data__ = data[i];
          nodeByKeyValue.delete(keyValue);
        } else {
          enter[i] = new EnterNode(parent, data[i]);
        }
      }

      // Add any remaining nodes that were not bound to data to exit.
      for (i = 0; i < groupLength; ++i) {
        if ((node = group[i]) && (nodeByKeyValue.get(keyValues[i]) === node)) {
          exit[i] = node;
        }
      }
    }

    function datum(node) {
      return node.__data__;
    }

    function selection_data(value, key) {
      if (!arguments.length) return Array.from(this, datum);

      var bind = key ? bindKey : bindIndex,
          parents = this._parents,
          groups = this._groups;

      if (typeof value !== "function") value = constant$2(value);

      for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
        var parent = parents[j],
            group = groups[j],
            groupLength = group.length,
            data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
            dataLength = data.length,
            enterGroup = enter[j] = new Array(dataLength),
            updateGroup = update[j] = new Array(dataLength),
            exitGroup = exit[j] = new Array(groupLength);

        bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

        // Now connect the enter nodes to their following update node, such that
        // appendChild can insert the materialized enter node before this node,
        // rather than at the end of the parent node.
        for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
          if (previous = enterGroup[i0]) {
            if (i0 >= i1) i1 = i0 + 1;
            while (!(next = updateGroup[i1]) && ++i1 < dataLength);
            previous._next = next || null;
          }
        }
      }

      update = new Selection$1(update, parents);
      update._enter = enter;
      update._exit = exit;
      return update;
    }

    // Given some data, this returns an array-like view of it: an object that
    // exposes a length property and allows numeric indexing. Note that unlike
    // selectAll, this isn’t worried about “live” collections because the resulting
    // array will only be used briefly while data is being bound. (It is possible to
    // cause the data to change while iterating by using a key function, but please
    // don’t; we’d rather avoid a gratuitous copy.)
    function arraylike(data) {
      return typeof data === "object" && "length" in data
        ? data // Array, TypedArray, NodeList, array-like
        : Array.from(data); // Map, Set, iterable, string, or anything else
    }

    function selection_exit() {
      return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
    }

    function selection_join(onenter, onupdate, onexit) {
      var enter = this.enter(), update = this, exit = this.exit();
      if (typeof onenter === "function") {
        enter = onenter(enter);
        if (enter) enter = enter.selection();
      } else {
        enter = enter.append(onenter + "");
      }
      if (onupdate != null) {
        update = onupdate(update);
        if (update) update = update.selection();
      }
      if (onexit == null) exit.remove(); else onexit(exit);
      return enter && update ? enter.merge(update).order() : update;
    }

    function selection_merge(context) {
      var selection = context.selection ? context.selection() : context;

      for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group0[i] || group1[i]) {
            merge[i] = node;
          }
        }
      }

      for (; j < m0; ++j) {
        merges[j] = groups0[j];
      }

      return new Selection$1(merges, this._parents);
    }

    function selection_order() {

      for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
        for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
          if (node = group[i]) {
            if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
            next = node;
          }
        }
      }

      return this;
    }

    function selection_sort(compare) {
      if (!compare) compare = ascending;

      function compareNode(a, b) {
        return a && b ? compare(a.__data__, b.__data__) : !a - !b;
      }

      for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            sortgroup[i] = node;
          }
        }
        sortgroup.sort(compareNode);
      }

      return new Selection$1(sortgroups, this._parents).order();
    }

    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }

    function selection_call() {
      var callback = arguments[0];
      arguments[0] = this;
      callback.apply(null, arguments);
      return this;
    }

    function selection_nodes() {
      return Array.from(this);
    }

    function selection_node() {

      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
          var node = group[i];
          if (node) return node;
        }
      }

      return null;
    }

    function selection_size() {
      let size = 0;
      for (const node of this) ++size; // eslint-disable-line no-unused-vars
      return size;
    }

    function selection_empty() {
      return !this.node();
    }

    function selection_each(callback) {

      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
          if (node = group[i]) callback.call(node, node.__data__, i, group);
        }
      }

      return this;
    }

    function attrRemove$1(name) {
      return function() {
        this.removeAttribute(name);
      };
    }

    function attrRemoveNS$1(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }

    function attrConstant$1(name, value) {
      return function() {
        this.setAttribute(name, value);
      };
    }

    function attrConstantNS$1(fullname, value) {
      return function() {
        this.setAttributeNS(fullname.space, fullname.local, value);
      };
    }

    function attrFunction$1(name, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttribute(name);
        else this.setAttribute(name, v);
      };
    }

    function attrFunctionNS$1(fullname, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
        else this.setAttributeNS(fullname.space, fullname.local, v);
      };
    }

    function selection_attr(name, value) {
      var fullname = namespace(name);

      if (arguments.length < 2) {
        var node = this.node();
        return fullname.local
            ? node.getAttributeNS(fullname.space, fullname.local)
            : node.getAttribute(fullname);
      }

      return this.each((value == null
          ? (fullname.local ? attrRemoveNS$1 : attrRemove$1) : (typeof value === "function"
          ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)
          : (fullname.local ? attrConstantNS$1 : attrConstant$1)))(fullname, value));
    }

    function defaultView(node) {
      return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
          || (node.document && node) // node is a Window
          || node.defaultView; // node is a Document
    }

    function styleRemove$1(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }

    function styleConstant$1(name, value, priority) {
      return function() {
        this.style.setProperty(name, value, priority);
      };
    }

    function styleFunction$1(name, value, priority) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) this.style.removeProperty(name);
        else this.style.setProperty(name, v, priority);
      };
    }

    function selection_style(name, value, priority) {
      return arguments.length > 1
          ? this.each((value == null
                ? styleRemove$1 : typeof value === "function"
                ? styleFunction$1
                : styleConstant$1)(name, value, priority == null ? "" : priority))
          : styleValue(this.node(), name);
    }

    function styleValue(node, name) {
      return node.style.getPropertyValue(name)
          || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
    }

    function propertyRemove(name) {
      return function() {
        delete this[name];
      };
    }

    function propertyConstant(name, value) {
      return function() {
        this[name] = value;
      };
    }

    function propertyFunction(name, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (v == null) delete this[name];
        else this[name] = v;
      };
    }

    function selection_property(name, value) {
      return arguments.length > 1
          ? this.each((value == null
              ? propertyRemove : typeof value === "function"
              ? propertyFunction
              : propertyConstant)(name, value))
          : this.node()[name];
    }

    function classArray(string) {
      return string.trim().split(/^|\s+/);
    }

    function classList(node) {
      return node.classList || new ClassList(node);
    }

    function ClassList(node) {
      this._node = node;
      this._names = classArray(node.getAttribute("class") || "");
    }

    ClassList.prototype = {
      add: function(name) {
        var i = this._names.indexOf(name);
        if (i < 0) {
          this._names.push(name);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      remove: function(name) {
        var i = this._names.indexOf(name);
        if (i >= 0) {
          this._names.splice(i, 1);
          this._node.setAttribute("class", this._names.join(" "));
        }
      },
      contains: function(name) {
        return this._names.indexOf(name) >= 0;
      }
    };

    function classedAdd(node, names) {
      var list = classList(node), i = -1, n = names.length;
      while (++i < n) list.add(names[i]);
    }

    function classedRemove(node, names) {
      var list = classList(node), i = -1, n = names.length;
      while (++i < n) list.remove(names[i]);
    }

    function classedTrue(names) {
      return function() {
        classedAdd(this, names);
      };
    }

    function classedFalse(names) {
      return function() {
        classedRemove(this, names);
      };
    }

    function classedFunction(names, value) {
      return function() {
        (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
      };
    }

    function selection_classed(name, value) {
      var names = classArray(name + "");

      if (arguments.length < 2) {
        var list = classList(this.node()), i = -1, n = names.length;
        while (++i < n) if (!list.contains(names[i])) return false;
        return true;
      }

      return this.each((typeof value === "function"
          ? classedFunction : value
          ? classedTrue
          : classedFalse)(names, value));
    }

    function textRemove() {
      this.textContent = "";
    }

    function textConstant$1(value) {
      return function() {
        this.textContent = value;
      };
    }

    function textFunction$1(value) {
      return function() {
        var v = value.apply(this, arguments);
        this.textContent = v == null ? "" : v;
      };
    }

    function selection_text(value) {
      return arguments.length
          ? this.each(value == null
              ? textRemove : (typeof value === "function"
              ? textFunction$1
              : textConstant$1)(value))
          : this.node().textContent;
    }

    function htmlRemove() {
      this.innerHTML = "";
    }

    function htmlConstant(value) {
      return function() {
        this.innerHTML = value;
      };
    }

    function htmlFunction(value) {
      return function() {
        var v = value.apply(this, arguments);
        this.innerHTML = v == null ? "" : v;
      };
    }

    function selection_html(value) {
      return arguments.length
          ? this.each(value == null
              ? htmlRemove : (typeof value === "function"
              ? htmlFunction
              : htmlConstant)(value))
          : this.node().innerHTML;
    }

    function raise() {
      if (this.nextSibling) this.parentNode.appendChild(this);
    }

    function selection_raise() {
      return this.each(raise);
    }

    function lower() {
      if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }

    function selection_lower() {
      return this.each(lower);
    }

    function selection_append(name) {
      var create = typeof name === "function" ? name : creator(name);
      return this.select(function() {
        return this.appendChild(create.apply(this, arguments));
      });
    }

    function constantNull() {
      return null;
    }

    function selection_insert(name, before) {
      var create = typeof name === "function" ? name : creator(name),
          select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
      return this.select(function() {
        return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
      });
    }

    function remove() {
      var parent = this.parentNode;
      if (parent) parent.removeChild(this);
    }

    function selection_remove() {
      return this.each(remove);
    }

    function selection_cloneShallow() {
      var clone = this.cloneNode(false), parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }

    function selection_cloneDeep() {
      var clone = this.cloneNode(true), parent = this.parentNode;
      return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }

    function selection_clone(deep) {
      return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    }

    function selection_datum(value) {
      return arguments.length
          ? this.property("__data__", value)
          : this.node().__data__;
    }

    function contextListener(listener) {
      return function(event) {
        listener.call(this, event, this.__data__);
      };
    }

    function parseTypenames(typenames) {
      return typenames.trim().split(/^|\s+/).map(function(t) {
        var name = "", i = t.indexOf(".");
        if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
        return {type: t, name: name};
      });
    }

    function onRemove(typename) {
      return function() {
        var on = this.__on;
        if (!on) return;
        for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
          if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
          } else {
            on[++i] = o;
          }
        }
        if (++i) on.length = i;
        else delete this.__on;
      };
    }

    function onAdd(typename, value, options) {
      return function() {
        var on = this.__on, o, listener = contextListener(value);
        if (on) for (var j = 0, m = on.length; j < m; ++j) {
          if ((o = on[j]).type === typename.type && o.name === typename.name) {
            this.removeEventListener(o.type, o.listener, o.options);
            this.addEventListener(o.type, o.listener = listener, o.options = options);
            o.value = value;
            return;
          }
        }
        this.addEventListener(typename.type, listener, options);
        o = {type: typename.type, name: typename.name, value: value, listener: listener, options: options};
        if (!on) this.__on = [o];
        else on.push(o);
      };
    }

    function selection_on(typename, value, options) {
      var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

      if (arguments.length < 2) {
        var on = this.node().__on;
        if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
          for (i = 0, o = on[j]; i < n; ++i) {
            if ((t = typenames[i]).type === o.type && t.name === o.name) {
              return o.value;
            }
          }
        }
        return;
      }

      on = value ? onAdd : onRemove;
      for (i = 0; i < n; ++i) this.each(on(typenames[i], value, options));
      return this;
    }

    function dispatchEvent(node, type, params) {
      var window = defaultView(node),
          event = window.CustomEvent;

      if (typeof event === "function") {
        event = new event(type, params);
      } else {
        event = window.document.createEvent("Event");
        if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
        else event.initEvent(type, false, false);
      }

      node.dispatchEvent(event);
    }

    function dispatchConstant(type, params) {
      return function() {
        return dispatchEvent(this, type, params);
      };
    }

    function dispatchFunction(type, params) {
      return function() {
        return dispatchEvent(this, type, params.apply(this, arguments));
      };
    }

    function selection_dispatch(type, params) {
      return this.each((typeof params === "function"
          ? dispatchFunction
          : dispatchConstant)(type, params));
    }

    function* selection_iterator() {
      for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
        for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
          if (node = group[i]) yield node;
        }
      }
    }

    var root$1 = [null];

    function Selection$1(groups, parents) {
      this._groups = groups;
      this._parents = parents;
    }

    function selection() {
      return new Selection$1([[document.documentElement]], root$1);
    }

    function selection_selection() {
      return this;
    }

    Selection$1.prototype = selection.prototype = {
      constructor: Selection$1,
      select: selection_select,
      selectAll: selection_selectAll,
      selectChild: selection_selectChild,
      selectChildren: selection_selectChildren,
      filter: selection_filter,
      data: selection_data,
      enter: selection_enter,
      exit: selection_exit,
      join: selection_join,
      merge: selection_merge,
      selection: selection_selection,
      order: selection_order,
      sort: selection_sort,
      call: selection_call,
      nodes: selection_nodes,
      node: selection_node,
      size: selection_size,
      empty: selection_empty,
      each: selection_each,
      attr: selection_attr,
      style: selection_style,
      property: selection_property,
      classed: selection_classed,
      text: selection_text,
      html: selection_html,
      raise: selection_raise,
      lower: selection_lower,
      append: selection_append,
      insert: selection_insert,
      remove: selection_remove,
      clone: selection_clone,
      datum: selection_datum,
      on: selection_on,
      dispatch: selection_dispatch,
      [Symbol.iterator]: selection_iterator
    };

    function select(selector) {
      return typeof selector === "string"
          ? new Selection$1([[document.querySelector(selector)]], [document.documentElement])
          : new Selection$1([[selector]], root$1);
    }

    function define(constructor, factory, prototype) {
      constructor.prototype = factory.prototype = prototype;
      prototype.constructor = constructor;
    }

    function extend$1(parent, definition) {
      var prototype = Object.create(parent.prototype);
      for (var key in definition) prototype[key] = definition[key];
      return prototype;
    }

    function Color() {}

    var darker = 0.7;
    var brighter = 1 / darker;

    var reI = "\\s*([+-]?\\d+)\\s*",
        reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        reHex = /^#([0-9a-f]{3,8})$/,
        reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
        reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
        reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
        reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
        reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
        reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

    var named = {
      aliceblue: 0xf0f8ff,
      antiquewhite: 0xfaebd7,
      aqua: 0x00ffff,
      aquamarine: 0x7fffd4,
      azure: 0xf0ffff,
      beige: 0xf5f5dc,
      bisque: 0xffe4c4,
      black: 0x000000,
      blanchedalmond: 0xffebcd,
      blue: 0x0000ff,
      blueviolet: 0x8a2be2,
      brown: 0xa52a2a,
      burlywood: 0xdeb887,
      cadetblue: 0x5f9ea0,
      chartreuse: 0x7fff00,
      chocolate: 0xd2691e,
      coral: 0xff7f50,
      cornflowerblue: 0x6495ed,
      cornsilk: 0xfff8dc,
      crimson: 0xdc143c,
      cyan: 0x00ffff,
      darkblue: 0x00008b,
      darkcyan: 0x008b8b,
      darkgoldenrod: 0xb8860b,
      darkgray: 0xa9a9a9,
      darkgreen: 0x006400,
      darkgrey: 0xa9a9a9,
      darkkhaki: 0xbdb76b,
      darkmagenta: 0x8b008b,
      darkolivegreen: 0x556b2f,
      darkorange: 0xff8c00,
      darkorchid: 0x9932cc,
      darkred: 0x8b0000,
      darksalmon: 0xe9967a,
      darkseagreen: 0x8fbc8f,
      darkslateblue: 0x483d8b,
      darkslategray: 0x2f4f4f,
      darkslategrey: 0x2f4f4f,
      darkturquoise: 0x00ced1,
      darkviolet: 0x9400d3,
      deeppink: 0xff1493,
      deepskyblue: 0x00bfff,
      dimgray: 0x696969,
      dimgrey: 0x696969,
      dodgerblue: 0x1e90ff,
      firebrick: 0xb22222,
      floralwhite: 0xfffaf0,
      forestgreen: 0x228b22,
      fuchsia: 0xff00ff,
      gainsboro: 0xdcdcdc,
      ghostwhite: 0xf8f8ff,
      gold: 0xffd700,
      goldenrod: 0xdaa520,
      gray: 0x808080,
      green: 0x008000,
      greenyellow: 0xadff2f,
      grey: 0x808080,
      honeydew: 0xf0fff0,
      hotpink: 0xff69b4,
      indianred: 0xcd5c5c,
      indigo: 0x4b0082,
      ivory: 0xfffff0,
      khaki: 0xf0e68c,
      lavender: 0xe6e6fa,
      lavenderblush: 0xfff0f5,
      lawngreen: 0x7cfc00,
      lemonchiffon: 0xfffacd,
      lightblue: 0xadd8e6,
      lightcoral: 0xf08080,
      lightcyan: 0xe0ffff,
      lightgoldenrodyellow: 0xfafad2,
      lightgray: 0xd3d3d3,
      lightgreen: 0x90ee90,
      lightgrey: 0xd3d3d3,
      lightpink: 0xffb6c1,
      lightsalmon: 0xffa07a,
      lightseagreen: 0x20b2aa,
      lightskyblue: 0x87cefa,
      lightslategray: 0x778899,
      lightslategrey: 0x778899,
      lightsteelblue: 0xb0c4de,
      lightyellow: 0xffffe0,
      lime: 0x00ff00,
      limegreen: 0x32cd32,
      linen: 0xfaf0e6,
      magenta: 0xff00ff,
      maroon: 0x800000,
      mediumaquamarine: 0x66cdaa,
      mediumblue: 0x0000cd,
      mediumorchid: 0xba55d3,
      mediumpurple: 0x9370db,
      mediumseagreen: 0x3cb371,
      mediumslateblue: 0x7b68ee,
      mediumspringgreen: 0x00fa9a,
      mediumturquoise: 0x48d1cc,
      mediumvioletred: 0xc71585,
      midnightblue: 0x191970,
      mintcream: 0xf5fffa,
      mistyrose: 0xffe4e1,
      moccasin: 0xffe4b5,
      navajowhite: 0xffdead,
      navy: 0x000080,
      oldlace: 0xfdf5e6,
      olive: 0x808000,
      olivedrab: 0x6b8e23,
      orange: 0xffa500,
      orangered: 0xff4500,
      orchid: 0xda70d6,
      palegoldenrod: 0xeee8aa,
      palegreen: 0x98fb98,
      paleturquoise: 0xafeeee,
      palevioletred: 0xdb7093,
      papayawhip: 0xffefd5,
      peachpuff: 0xffdab9,
      peru: 0xcd853f,
      pink: 0xffc0cb,
      plum: 0xdda0dd,
      powderblue: 0xb0e0e6,
      purple: 0x800080,
      rebeccapurple: 0x663399,
      red: 0xff0000,
      rosybrown: 0xbc8f8f,
      royalblue: 0x4169e1,
      saddlebrown: 0x8b4513,
      salmon: 0xfa8072,
      sandybrown: 0xf4a460,
      seagreen: 0x2e8b57,
      seashell: 0xfff5ee,
      sienna: 0xa0522d,
      silver: 0xc0c0c0,
      skyblue: 0x87ceeb,
      slateblue: 0x6a5acd,
      slategray: 0x708090,
      slategrey: 0x708090,
      snow: 0xfffafa,
      springgreen: 0x00ff7f,
      steelblue: 0x4682b4,
      tan: 0xd2b48c,
      teal: 0x008080,
      thistle: 0xd8bfd8,
      tomato: 0xff6347,
      turquoise: 0x40e0d0,
      violet: 0xee82ee,
      wheat: 0xf5deb3,
      white: 0xffffff,
      whitesmoke: 0xf5f5f5,
      yellow: 0xffff00,
      yellowgreen: 0x9acd32
    };

    define(Color, color, {
      copy: function(channels) {
        return Object.assign(new this.constructor, this, channels);
      },
      displayable: function() {
        return this.rgb().displayable();
      },
      hex: color_formatHex, // Deprecated! Use color.formatHex.
      formatHex: color_formatHex,
      formatHsl: color_formatHsl,
      formatRgb: color_formatRgb,
      toString: color_formatRgb
    });

    function color_formatHex() {
      return this.rgb().formatHex();
    }

    function color_formatHsl() {
      return hslConvert(this).formatHsl();
    }

    function color_formatRgb() {
      return this.rgb().formatRgb();
    }

    function color(format) {
      var m, l;
      format = (format + "").trim().toLowerCase();
      return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
          : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
          : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
          : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
          : null) // invalid hex
          : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
          : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
          : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
          : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
          : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
          : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
          : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
          : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
          : null;
    }

    function rgbn(n) {
      return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
    }

    function rgba(r, g, b, a) {
      if (a <= 0) r = g = b = NaN;
      return new Rgb(r, g, b, a);
    }

    function rgbConvert(o) {
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Rgb;
      o = o.rgb();
      return new Rgb(o.r, o.g, o.b, o.opacity);
    }

    function rgb(r, g, b, opacity) {
      return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
    }

    function Rgb(r, g, b, opacity) {
      this.r = +r;
      this.g = +g;
      this.b = +b;
      this.opacity = +opacity;
    }

    define(Rgb, rgb, extend$1(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
      },
      rgb: function() {
        return this;
      },
      displayable: function() {
        return (-0.5 <= this.r && this.r < 255.5)
            && (-0.5 <= this.g && this.g < 255.5)
            && (-0.5 <= this.b && this.b < 255.5)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      hex: rgb_formatHex, // Deprecated! Use color.formatHex.
      formatHex: rgb_formatHex,
      formatRgb: rgb_formatRgb,
      toString: rgb_formatRgb
    }));

    function rgb_formatHex() {
      return "#" + hex(this.r) + hex(this.g) + hex(this.b);
    }

    function rgb_formatRgb() {
      var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "rgb(" : "rgba(")
          + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
          + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
          + Math.max(0, Math.min(255, Math.round(this.b) || 0))
          + (a === 1 ? ")" : ", " + a + ")");
    }

    function hex(value) {
      value = Math.max(0, Math.min(255, Math.round(value) || 0));
      return (value < 16 ? "0" : "") + value.toString(16);
    }

    function hsla(h, s, l, a) {
      if (a <= 0) h = s = l = NaN;
      else if (l <= 0 || l >= 1) h = s = NaN;
      else if (s <= 0) h = NaN;
      return new Hsl(h, s, l, a);
    }

    function hslConvert(o) {
      if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
      if (!(o instanceof Color)) o = color(o);
      if (!o) return new Hsl;
      if (o instanceof Hsl) return o;
      o = o.rgb();
      var r = o.r / 255,
          g = o.g / 255,
          b = o.b / 255,
          min = Math.min(r, g, b),
          max = Math.max(r, g, b),
          h = NaN,
          s = max - min,
          l = (max + min) / 2;
      if (s) {
        if (r === max) h = (g - b) / s + (g < b) * 6;
        else if (g === max) h = (b - r) / s + 2;
        else h = (r - g) / s + 4;
        s /= l < 0.5 ? max + min : 2 - max - min;
        h *= 60;
      } else {
        s = l > 0 && l < 1 ? 0 : h;
      }
      return new Hsl(h, s, l, o.opacity);
    }

    function hsl(h, s, l, opacity) {
      return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
    }

    function Hsl(h, s, l, opacity) {
      this.h = +h;
      this.s = +s;
      this.l = +l;
      this.opacity = +opacity;
    }

    define(Hsl, hsl, extend$1(Color, {
      brighter: function(k) {
        k = k == null ? brighter : Math.pow(brighter, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      darker: function(k) {
        k = k == null ? darker : Math.pow(darker, k);
        return new Hsl(this.h, this.s, this.l * k, this.opacity);
      },
      rgb: function() {
        var h = this.h % 360 + (this.h < 0) * 360,
            s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
            l = this.l,
            m2 = l + (l < 0.5 ? l : 1 - l) * s,
            m1 = 2 * l - m2;
        return new Rgb(
          hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
          hsl2rgb(h, m1, m2),
          hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
          this.opacity
        );
      },
      displayable: function() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s))
            && (0 <= this.l && this.l <= 1)
            && (0 <= this.opacity && this.opacity <= 1);
      },
      formatHsl: function() {
        var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (a === 1 ? "hsl(" : "hsla(")
            + (this.h || 0) + ", "
            + (this.s || 0) * 100 + "%, "
            + (this.l || 0) * 100 + "%"
            + (a === 1 ? ")" : ", " + a + ")");
      }
    }));

    /* From FvD 13.37, CSS Color Module Level 3 */
    function hsl2rgb(h, m1, m2) {
      return (h < 60 ? m1 + (m2 - m1) * h / 60
          : h < 180 ? m2
          : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
          : m1) * 255;
    }

    var constant$1 = x => () => x;

    function linear(a, d) {
      return function(t) {
        return a + t * d;
      };
    }

    function exponential(a, b, y) {
      return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
        return Math.pow(a + t * b, y);
      };
    }

    function gamma(y) {
      return (y = +y) === 1 ? nogamma : function(a, b) {
        return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
      };
    }

    function nogamma(a, b) {
      var d = b - a;
      return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
    }

    var interpolateRgb = (function rgbGamma(y) {
      var color = gamma(y);

      function rgb$1(start, end) {
        var r = color((start = rgb(start)).r, (end = rgb(end)).r),
            g = color(start.g, end.g),
            b = color(start.b, end.b),
            opacity = nogamma(start.opacity, end.opacity);
        return function(t) {
          start.r = r(t);
          start.g = g(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }

      rgb$1.gamma = rgbGamma;

      return rgb$1;
    })(1);

    function interpolateNumber(a, b) {
      return a = +a, b = +b, function(t) {
        return a * (1 - t) + b * t;
      };
    }

    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        reB = new RegExp(reA.source, "g");

    function zero(b) {
      return function() {
        return b;
      };
    }

    function one(b) {
      return function(t) {
        return b(t) + "";
      };
    }

    function interpolateString(a, b) {
      var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
          am, // current match in a
          bm, // current match in b
          bs, // string preceding current number in b, if any
          i = -1, // index in s
          s = [], // string constants and placeholders
          q = []; // number interpolators

      // Coerce inputs to strings.
      a = a + "", b = b + "";

      // Interpolate pairs of numbers in a & b.
      while ((am = reA.exec(a))
          && (bm = reB.exec(b))) {
        if ((bs = bm.index) > bi) { // a string precedes the next number in b
          bs = b.slice(bi, bs);
          if (s[i]) s[i] += bs; // coalesce with previous string
          else s[++i] = bs;
        }
        if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
          if (s[i]) s[i] += bm; // coalesce with previous string
          else s[++i] = bm;
        } else { // interpolate non-matching numbers
          s[++i] = null;
          q.push({i: i, x: interpolateNumber(am, bm)});
        }
        bi = reB.lastIndex;
      }

      // Add remains of b.
      if (bi < b.length) {
        bs = b.slice(bi);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }

      // Special optimization for only a single match.
      // Otherwise, interpolate each of the numbers and rejoin the string.
      return s.length < 2 ? (q[0]
          ? one(q[0].x)
          : zero(b))
          : (b = q.length, function(t) {
              for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
              return s.join("");
            });
    }

    var degrees = 180 / Math.PI;

    var identity$1 = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    };

    function decompose(a, b, c, d, e, f) {
      var scaleX, scaleY, skewX;
      if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
      if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
      if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
      if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
      return {
        translateX: e,
        translateY: f,
        rotate: Math.atan2(b, a) * degrees,
        skewX: Math.atan(skewX) * degrees,
        scaleX: scaleX,
        scaleY: scaleY
      };
    }

    var svgNode;

    /* eslint-disable no-undef */
    function parseCss(value) {
      const m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
      return m.isIdentity ? identity$1 : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
    }

    function parseSvg(value) {
      if (value == null) return identity$1;
      if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svgNode.setAttribute("transform", value);
      if (!(value = svgNode.transform.baseVal.consolidate())) return identity$1;
      value = value.matrix;
      return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
    }

    function interpolateTransform(parse, pxComma, pxParen, degParen) {

      function pop(s) {
        return s.length ? s.pop() + " " : "";
      }

      function translate(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push("translate(", null, pxComma, null, pxParen);
          q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
        } else if (xb || yb) {
          s.push("translate(" + xb + pxComma + yb + pxParen);
        }
      }

      function rotate(a, b, s, q) {
        if (a !== b) {
          if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
          q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: interpolateNumber(a, b)});
        } else if (b) {
          s.push(pop(s) + "rotate(" + b + degParen);
        }
      }

      function skewX(a, b, s, q) {
        if (a !== b) {
          q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: interpolateNumber(a, b)});
        } else if (b) {
          s.push(pop(s) + "skewX(" + b + degParen);
        }
      }

      function scale(xa, ya, xb, yb, s, q) {
        if (xa !== xb || ya !== yb) {
          var i = s.push(pop(s) + "scale(", null, ",", null, ")");
          q.push({i: i - 4, x: interpolateNumber(xa, xb)}, {i: i - 2, x: interpolateNumber(ya, yb)});
        } else if (xb !== 1 || yb !== 1) {
          s.push(pop(s) + "scale(" + xb + "," + yb + ")");
        }
      }

      return function(a, b) {
        var s = [], // string constants and placeholders
            q = []; // number interpolators
        a = parse(a), b = parse(b);
        translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
        rotate(a.rotate, b.rotate, s, q);
        skewX(a.skewX, b.skewX, s, q);
        scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
        a = b = null; // gc
        return function(t) {
          var i = -1, n = q.length, o;
          while (++i < n) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        };
      };
    }

    var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
    var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");

    var frame = 0, // is an animation frame pending?
        timeout$1 = 0, // is a timeout pending?
        interval = 0, // are any timers active?
        pokeDelay = 1000, // how frequently we check for clock skew
        taskHead,
        taskTail,
        clockLast = 0,
        clockNow = 0,
        clockSkew = 0,
        clock = typeof performance === "object" && performance.now ? performance : Date,
        setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

    function now$1() {
      return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }

    function clearNow() {
      clockNow = 0;
    }

    function Timer() {
      this._call =
      this._time =
      this._next = null;
    }

    Timer.prototype = timer.prototype = {
      constructor: Timer,
      restart: function(callback, delay, time) {
        if (typeof callback !== "function") throw new TypeError("callback is not a function");
        time = (time == null ? now$1() : +time) + (delay == null ? 0 : +delay);
        if (!this._next && taskTail !== this) {
          if (taskTail) taskTail._next = this;
          else taskHead = this;
          taskTail = this;
        }
        this._call = callback;
        this._time = time;
        sleep();
      },
      stop: function() {
        if (this._call) {
          this._call = null;
          this._time = Infinity;
          sleep();
        }
      }
    };

    function timer(callback, delay, time) {
      var t = new Timer;
      t.restart(callback, delay, time);
      return t;
    }

    function timerFlush() {
      now$1(); // Get the current time, if not already set.
      ++frame; // Pretend we’ve set an alarm, if we haven’t already.
      var t = taskHead, e;
      while (t) {
        if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
        t = t._next;
      }
      --frame;
    }

    function wake() {
      clockNow = (clockLast = clock.now()) + clockSkew;
      frame = timeout$1 = 0;
      try {
        timerFlush();
      } finally {
        frame = 0;
        nap();
        clockNow = 0;
      }
    }

    function poke() {
      var now = clock.now(), delay = now - clockLast;
      if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
    }

    function nap() {
      var t0, t1 = taskHead, t2, time = Infinity;
      while (t1) {
        if (t1._call) {
          if (time > t1._time) time = t1._time;
          t0 = t1, t1 = t1._next;
        } else {
          t2 = t1._next, t1._next = null;
          t1 = t0 ? t0._next = t2 : taskHead = t2;
        }
      }
      taskTail = t0;
      sleep(time);
    }

    function sleep(time) {
      if (frame) return; // Soonest alarm already set, or will be.
      if (timeout$1) timeout$1 = clearTimeout(timeout$1);
      var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
      if (delay > 24) {
        if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
        if (interval) interval = clearInterval(interval);
      } else {
        if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
        frame = 1, setFrame(wake);
      }
    }

    function timeout(callback, delay, time) {
      var t = new Timer;
      delay = delay == null ? 0 : +delay;
      t.restart(elapsed => {
        t.stop();
        callback(elapsed + delay);
      }, delay, time);
      return t;
    }

    var emptyOn = dispatch("start", "end", "cancel", "interrupt");
    var emptyTween = [];

    var CREATED = 0;
    var SCHEDULED = 1;
    var STARTING = 2;
    var STARTED = 3;
    var RUNNING = 4;
    var ENDING = 5;
    var ENDED = 6;

    function schedule(node, name, id, index, group, timing) {
      var schedules = node.__transition;
      if (!schedules) node.__transition = {};
      else if (id in schedules) return;
      create$1(node, id, {
        name: name,
        index: index, // For context during callback.
        group: group, // For context during callback.
        on: emptyOn,
        tween: emptyTween,
        time: timing.time,
        delay: timing.delay,
        duration: timing.duration,
        ease: timing.ease,
        timer: null,
        state: CREATED
      });
    }

    function init(node, id) {
      var schedule = get(node, id);
      if (schedule.state > CREATED) throw new Error("too late; already scheduled");
      return schedule;
    }

    function set(node, id) {
      var schedule = get(node, id);
      if (schedule.state > STARTED) throw new Error("too late; already running");
      return schedule;
    }

    function get(node, id) {
      var schedule = node.__transition;
      if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
      return schedule;
    }

    function create$1(node, id, self) {
      var schedules = node.__transition,
          tween;

      // Initialize the self timer when the transition is created.
      // Note the actual delay is not known until the first callback!
      schedules[id] = self;
      self.timer = timer(schedule, 0, self.time);

      function schedule(elapsed) {
        self.state = SCHEDULED;
        self.timer.restart(start, self.delay, self.time);

        // If the elapsed delay is less than our first sleep, start immediately.
        if (self.delay <= elapsed) start(elapsed - self.delay);
      }

      function start(elapsed) {
        var i, j, n, o;

        // If the state is not SCHEDULED, then we previously errored on start.
        if (self.state !== SCHEDULED) return stop();

        for (i in schedules) {
          o = schedules[i];
          if (o.name !== self.name) continue;

          // While this element already has a starting transition during this frame,
          // defer starting an interrupting transition until that transition has a
          // chance to tick (and possibly end); see d3/d3-transition#54!
          if (o.state === STARTED) return timeout(start);

          // Interrupt the active transition, if any.
          if (o.state === RUNNING) {
            o.state = ENDED;
            o.timer.stop();
            o.on.call("interrupt", node, node.__data__, o.index, o.group);
            delete schedules[i];
          }

          // Cancel any pre-empted transitions.
          else if (+i < id) {
            o.state = ENDED;
            o.timer.stop();
            o.on.call("cancel", node, node.__data__, o.index, o.group);
            delete schedules[i];
          }
        }

        // Defer the first tick to end of the current frame; see d3/d3#1576.
        // Note the transition may be canceled after start and before the first tick!
        // Note this must be scheduled before the start event; see d3/d3-transition#16!
        // Assuming this is successful, subsequent callbacks go straight to tick.
        timeout(function() {
          if (self.state === STARTED) {
            self.state = RUNNING;
            self.timer.restart(tick, self.delay, self.time);
            tick(elapsed);
          }
        });

        // Dispatch the start event.
        // Note this must be done before the tween are initialized.
        self.state = STARTING;
        self.on.call("start", node, node.__data__, self.index, self.group);
        if (self.state !== STARTING) return; // interrupted
        self.state = STARTED;

        // Initialize the tween, deleting null tween.
        tween = new Array(n = self.tween.length);
        for (i = 0, j = -1; i < n; ++i) {
          if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
            tween[++j] = o;
          }
        }
        tween.length = j + 1;
      }

      function tick(elapsed) {
        var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
            i = -1,
            n = tween.length;

        while (++i < n) {
          tween[i].call(node, t);
        }

        // Dispatch the end event.
        if (self.state === ENDING) {
          self.on.call("end", node, node.__data__, self.index, self.group);
          stop();
        }
      }

      function stop() {
        self.state = ENDED;
        self.timer.stop();
        delete schedules[id];
        for (var i in schedules) return; // eslint-disable-line no-unused-vars
        delete node.__transition;
      }
    }

    function interrupt(node, name) {
      var schedules = node.__transition,
          schedule,
          active,
          empty = true,
          i;

      if (!schedules) return;

      name = name == null ? null : name + "";

      for (i in schedules) {
        if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
        active = schedule.state > STARTING && schedule.state < ENDING;
        schedule.state = ENDED;
        schedule.timer.stop();
        schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
        delete schedules[i];
      }

      if (empty) delete node.__transition;
    }

    function selection_interrupt(name) {
      return this.each(function() {
        interrupt(this, name);
      });
    }

    function tweenRemove(id, name) {
      var tween0, tween1;
      return function() {
        var schedule = set(this, id),
            tween = schedule.tween;

        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
          tween1 = tween0 = tween;
          for (var i = 0, n = tween1.length; i < n; ++i) {
            if (tween1[i].name === name) {
              tween1 = tween1.slice();
              tween1.splice(i, 1);
              break;
            }
          }
        }

        schedule.tween = tween1;
      };
    }

    function tweenFunction(id, name, value) {
      var tween0, tween1;
      if (typeof value !== "function") throw new Error;
      return function() {
        var schedule = set(this, id),
            tween = schedule.tween;

        // If this node shared tween with the previous node,
        // just assign the updated shared tween and we’re done!
        // Otherwise, copy-on-write.
        if (tween !== tween0) {
          tween1 = (tween0 = tween).slice();
          for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
            if (tween1[i].name === name) {
              tween1[i] = t;
              break;
            }
          }
          if (i === n) tween1.push(t);
        }

        schedule.tween = tween1;
      };
    }

    function transition_tween(name, value) {
      var id = this._id;

      name += "";

      if (arguments.length < 2) {
        var tween = get(this.node(), id).tween;
        for (var i = 0, n = tween.length, t; i < n; ++i) {
          if ((t = tween[i]).name === name) {
            return t.value;
          }
        }
        return null;
      }

      return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
    }

    function tweenValue(transition, name, value) {
      var id = transition._id;

      transition.each(function() {
        var schedule = set(this, id);
        (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
      });

      return function(node) {
        return get(node, id).value[name];
      };
    }

    function interpolate(a, b) {
      var c;
      return (typeof b === "number" ? interpolateNumber
          : b instanceof color ? interpolateRgb
          : (c = color(b)) ? (b = c, interpolateRgb)
          : interpolateString)(a, b);
    }

    function attrRemove(name) {
      return function() {
        this.removeAttribute(name);
      };
    }

    function attrRemoveNS(fullname) {
      return function() {
        this.removeAttributeNS(fullname.space, fullname.local);
      };
    }

    function attrConstant(name, interpolate, value1) {
      var string00,
          string1 = value1 + "",
          interpolate0;
      return function() {
        var string0 = this.getAttribute(name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, value1);
      };
    }

    function attrConstantNS(fullname, interpolate, value1) {
      var string00,
          string1 = value1 + "",
          interpolate0;
      return function() {
        var string0 = this.getAttributeNS(fullname.space, fullname.local);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, value1);
      };
    }

    function attrFunction(name, interpolate, value) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttribute(name);
        string0 = this.getAttribute(name);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
      };
    }

    function attrFunctionNS(fullname, interpolate, value) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0, value1 = value(this), string1;
        if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
        string0 = this.getAttributeNS(fullname.space, fullname.local);
        string1 = value1 + "";
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
      };
    }

    function transition_attr(name, value) {
      var fullname = namespace(name), i = fullname === "transform" ? interpolateTransformSvg : interpolate;
      return this.attrTween(name, typeof value === "function"
          ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value))
          : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
          : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
    }

    function attrInterpolate(name, i) {
      return function(t) {
        this.setAttribute(name, i.call(this, t));
      };
    }

    function attrInterpolateNS(fullname, i) {
      return function(t) {
        this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
      };
    }

    function attrTweenNS(fullname, value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
        return t0;
      }
      tween._value = value;
      return tween;
    }

    function attrTween(name, value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
        return t0;
      }
      tween._value = value;
      return tween;
    }

    function transition_attrTween(name, value) {
      var key = "attr." + name;
      if (arguments.length < 2) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error;
      var fullname = namespace(name);
      return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    }

    function delayFunction(id, value) {
      return function() {
        init(this, id).delay = +value.apply(this, arguments);
      };
    }

    function delayConstant(id, value) {
      return value = +value, function() {
        init(this, id).delay = value;
      };
    }

    function transition_delay(value) {
      var id = this._id;

      return arguments.length
          ? this.each((typeof value === "function"
              ? delayFunction
              : delayConstant)(id, value))
          : get(this.node(), id).delay;
    }

    function durationFunction(id, value) {
      return function() {
        set(this, id).duration = +value.apply(this, arguments);
      };
    }

    function durationConstant(id, value) {
      return value = +value, function() {
        set(this, id).duration = value;
      };
    }

    function transition_duration(value) {
      var id = this._id;

      return arguments.length
          ? this.each((typeof value === "function"
              ? durationFunction
              : durationConstant)(id, value))
          : get(this.node(), id).duration;
    }

    function easeConstant(id, value) {
      if (typeof value !== "function") throw new Error;
      return function() {
        set(this, id).ease = value;
      };
    }

    function transition_ease(value) {
      var id = this._id;

      return arguments.length
          ? this.each(easeConstant(id, value))
          : get(this.node(), id).ease;
    }

    function easeVarying(id, value) {
      return function() {
        var v = value.apply(this, arguments);
        if (typeof v !== "function") throw new Error;
        set(this, id).ease = v;
      };
    }

    function transition_easeVarying(value) {
      if (typeof value !== "function") throw new Error;
      return this.each(easeVarying(this._id, value));
    }

    function transition_filter(match) {
      if (typeof match !== "function") match = matcher(match);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
          if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
            subgroup.push(node);
          }
        }
      }

      return new Transition(subgroups, this._parents, this._name, this._id);
    }

    function transition_merge(transition) {
      if (transition._id !== this._id) throw new Error;

      for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
        for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
          if (node = group0[i] || group1[i]) {
            merge[i] = node;
          }
        }
      }

      for (; j < m0; ++j) {
        merges[j] = groups0[j];
      }

      return new Transition(merges, this._parents, this._name, this._id);
    }

    function start(name) {
      return (name + "").trim().split(/^|\s+/).every(function(t) {
        var i = t.indexOf(".");
        if (i >= 0) t = t.slice(0, i);
        return !t || t === "start";
      });
    }

    function onFunction(id, name, listener) {
      var on0, on1, sit = start(name) ? init : set;
      return function() {
        var schedule = sit(this, id),
            on = schedule.on;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

        schedule.on = on1;
      };
    }

    function transition_on(name, listener) {
      var id = this._id;

      return arguments.length < 2
          ? get(this.node(), id).on.on(name)
          : this.each(onFunction(id, name, listener));
    }

    function removeFunction(id) {
      return function() {
        var parent = this.parentNode;
        for (var i in this.__transition) if (+i !== id) return;
        if (parent) parent.removeChild(this);
      };
    }

    function transition_remove() {
      return this.on("end.remove", removeFunction(this._id));
    }

    function transition_select(select) {
      var name = this._name,
          id = this._id;

      if (typeof select !== "function") select = selector(select);

      for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
          if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
            if ("__data__" in node) subnode.__data__ = node.__data__;
            subgroup[i] = subnode;
            schedule(subgroup[i], name, id, i, subgroup, get(node, id));
          }
        }
      }

      return new Transition(subgroups, this._parents, name, id);
    }

    function transition_selectAll(select) {
      var name = this._name,
          id = this._id;

      if (typeof select !== "function") select = selectorAll(select);

      for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
              if (child = children[k]) {
                schedule(child, name, id, k, children, inherit);
              }
            }
            subgroups.push(children);
            parents.push(node);
          }
        }
      }

      return new Transition(subgroups, parents, name, id);
    }

    var Selection = selection.prototype.constructor;

    function transition_selection() {
      return new Selection(this._groups, this._parents);
    }

    function styleNull(name, interpolate) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0 = styleValue(this, name),
            string1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, string10 = string1);
      };
    }

    function styleRemove(name) {
      return function() {
        this.style.removeProperty(name);
      };
    }

    function styleConstant(name, interpolate, value1) {
      var string00,
          string1 = value1 + "",
          interpolate0;
      return function() {
        var string0 = styleValue(this, name);
        return string0 === string1 ? null
            : string0 === string00 ? interpolate0
            : interpolate0 = interpolate(string00 = string0, value1);
      };
    }

    function styleFunction(name, interpolate, value) {
      var string00,
          string10,
          interpolate0;
      return function() {
        var string0 = styleValue(this, name),
            value1 = value(this),
            string1 = value1 + "";
        if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
        return string0 === string1 ? null
            : string0 === string00 && string1 === string10 ? interpolate0
            : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
      };
    }

    function styleMaybeRemove(id, name) {
      var on0, on1, listener0, key = "style." + name, event = "end." + key, remove;
      return function() {
        var schedule = set(this, id),
            on = schedule.on,
            listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined;

        // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);

        schedule.on = on1;
      };
    }

    function transition_style(name, value, priority) {
      var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
      return value == null ? this
          .styleTween(name, styleNull(name, i))
          .on("end.style." + name, styleRemove(name))
        : typeof value === "function" ? this
          .styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value)))
          .each(styleMaybeRemove(this._id, name))
        : this
          .styleTween(name, styleConstant(name, i, value), priority)
          .on("end.style." + name, null);
    }

    function styleInterpolate(name, i, priority) {
      return function(t) {
        this.style.setProperty(name, i.call(this, t), priority);
      };
    }

    function styleTween(name, value, priority) {
      var t, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
        return t;
      }
      tween._value = value;
      return tween;
    }

    function transition_styleTween(name, value, priority) {
      var key = "style." + (name += "");
      if (arguments.length < 2) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error;
      return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
    }

    function textConstant(value) {
      return function() {
        this.textContent = value;
      };
    }

    function textFunction(value) {
      return function() {
        var value1 = value(this);
        this.textContent = value1 == null ? "" : value1;
      };
    }

    function transition_text(value) {
      return this.tween("text", typeof value === "function"
          ? textFunction(tweenValue(this, "text", value))
          : textConstant(value == null ? "" : value + ""));
    }

    function textInterpolate(i) {
      return function(t) {
        this.textContent = i.call(this, t);
      };
    }

    function textTween(value) {
      var t0, i0;
      function tween() {
        var i = value.apply(this, arguments);
        if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
        return t0;
      }
      tween._value = value;
      return tween;
    }

    function transition_textTween(value) {
      var key = "text";
      if (arguments.length < 1) return (key = this.tween(key)) && key._value;
      if (value == null) return this.tween(key, null);
      if (typeof value !== "function") throw new Error;
      return this.tween(key, textTween(value));
    }

    function transition_transition() {
      var name = this._name,
          id0 = this._id,
          id1 = newId();

      for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            var inherit = get(node, id0);
            schedule(node, name, id1, i, group, {
              time: inherit.time + inherit.delay + inherit.duration,
              delay: 0,
              duration: inherit.duration,
              ease: inherit.ease
            });
          }
        }
      }

      return new Transition(groups, this._parents, name, id1);
    }

    function transition_end() {
      var on0, on1, that = this, id = that._id, size = that.size();
      return new Promise(function(resolve, reject) {
        var cancel = {value: reject},
            end = {value: function() { if (--size === 0) resolve(); }};

        that.each(function() {
          var schedule = set(this, id),
              on = schedule.on;

          // If this node shared a dispatch with the previous node,
          // just assign the updated shared dispatch and we’re done!
          // Otherwise, copy-on-write.
          if (on !== on0) {
            on1 = (on0 = on).copy();
            on1._.cancel.push(cancel);
            on1._.interrupt.push(cancel);
            on1._.end.push(end);
          }

          schedule.on = on1;
        });

        // The selection was empty, resolve end immediately
        if (size === 0) resolve();
      });
    }

    var id = 0;

    function Transition(groups, parents, name, id) {
      this._groups = groups;
      this._parents = parents;
      this._name = name;
      this._id = id;
    }

    function newId() {
      return ++id;
    }

    var selection_prototype = selection.prototype;

    Transition.prototype = {
      constructor: Transition,
      select: transition_select,
      selectAll: transition_selectAll,
      selectChild: selection_prototype.selectChild,
      selectChildren: selection_prototype.selectChildren,
      filter: transition_filter,
      merge: transition_merge,
      selection: transition_selection,
      transition: transition_transition,
      call: selection_prototype.call,
      nodes: selection_prototype.nodes,
      node: selection_prototype.node,
      size: selection_prototype.size,
      empty: selection_prototype.empty,
      each: selection_prototype.each,
      on: transition_on,
      attr: transition_attr,
      attrTween: transition_attrTween,
      style: transition_style,
      styleTween: transition_styleTween,
      text: transition_text,
      textTween: transition_textTween,
      remove: transition_remove,
      tween: transition_tween,
      delay: transition_delay,
      duration: transition_duration,
      ease: transition_ease,
      easeVarying: transition_easeVarying,
      end: transition_end,
      [Symbol.iterator]: selection_prototype[Symbol.iterator]
    };

    function cubicInOut(t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }

    var defaultTiming = {
      time: null, // Set on use.
      delay: 0,
      duration: 250,
      ease: cubicInOut
    };

    function inherit(node, id) {
      var timing;
      while (!(timing = node.__transition) || !(timing = timing[id])) {
        if (!(node = node.parentNode)) {
          throw new Error(`transition ${id} not found`);
        }
      }
      return timing;
    }

    function selection_transition(name) {
      var id,
          timing;

      if (name instanceof Transition) {
        id = name._id, name = name._name;
      } else {
        id = newId(), (timing = defaultTiming).time = now$1(), name = name == null ? null : name + "";
      }

      for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
        for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
          if (node = group[i]) {
            schedule(node, name, id, i, group, timing || inherit(node, id));
          }
        }
      }

      return new Transition(groups, this._parents, name, id);
    }

    selection.prototype.interrupt = selection_interrupt;
    selection.prototype.transition = selection_transition;

    const pi$1 = Math.PI,
        tau$1 = 2 * pi$1,
        epsilon$1 = 1e-6,
        tauEpsilon = tau$1 - epsilon$1;

    function Path() {
      this._x0 = this._y0 = // start of current subpath
      this._x1 = this._y1 = null; // end of current subpath
      this._ = "";
    }

    function path() {
      return new Path;
    }

    Path.prototype = path.prototype = {
      constructor: Path,
      moveTo: function(x, y) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
      },
      closePath: function() {
        if (this._x1 !== null) {
          this._x1 = this._x0, this._y1 = this._y0;
          this._ += "Z";
        }
      },
      lineTo: function(x, y) {
        this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
      },
      quadraticCurveTo: function(x1, y1, x, y) {
        this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
      },
      bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
      },
      arcTo: function(x1, y1, x2, y2, r) {
        x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
        var x0 = this._x1,
            y0 = this._y1,
            x21 = x2 - x1,
            y21 = y2 - y1,
            x01 = x0 - x1,
            y01 = y0 - y1,
            l01_2 = x01 * x01 + y01 * y01;

        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);

        // Is this path empty? Move to (x1,y1).
        if (this._x1 === null) {
          this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
        }

        // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
        else if (!(l01_2 > epsilon$1));

        // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
        // Equivalently, is (x1,y1) coincident with (x2,y2)?
        // Or, is the radius zero? Line to (x1,y1).
        else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon$1) || !r) {
          this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
        }

        // Otherwise, draw an arc!
        else {
          var x20 = x2 - x0,
              y20 = y2 - y0,
              l21_2 = x21 * x21 + y21 * y21,
              l20_2 = x20 * x20 + y20 * y20,
              l21 = Math.sqrt(l21_2),
              l01 = Math.sqrt(l01_2),
              l = r * Math.tan((pi$1 - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
              t01 = l / l01,
              t21 = l / l21;

          // If the start tangent is not coincident with (x0,y0), line to.
          if (Math.abs(t01 - 1) > epsilon$1) {
            this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
          }

          this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
        }
      },
      arc: function(x, y, r, a0, a1, ccw) {
        x = +x, y = +y, r = +r, ccw = !!ccw;
        var dx = r * Math.cos(a0),
            dy = r * Math.sin(a0),
            x0 = x + dx,
            y0 = y + dy,
            cw = 1 ^ ccw,
            da = ccw ? a0 - a1 : a1 - a0;

        // Is the radius negative? Error.
        if (r < 0) throw new Error("negative radius: " + r);

        // Is this path empty? Move to (x0,y0).
        if (this._x1 === null) {
          this._ += "M" + x0 + "," + y0;
        }

        // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
        else if (Math.abs(this._x1 - x0) > epsilon$1 || Math.abs(this._y1 - y0) > epsilon$1) {
          this._ += "L" + x0 + "," + y0;
        }

        // Is this arc empty? We’re done.
        if (!r) return;

        // Does the angle go the wrong way? Flip the direction.
        if (da < 0) da = da % tau$1 + tau$1;

        // Is this a complete circle? Draw two arcs to complete the circle.
        if (da > tauEpsilon) {
          this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
        }

        // Is this arc non-empty? Draw an arc!
        else if (da > epsilon$1) {
          this._ += "A" + r + "," + r + ",0," + (+(da >= pi$1)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
        }
      },
      rect: function(x, y, w, h) {
        this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
      },
      toString: function() {
        return this._;
      }
    };

    function image(input, init) {
      return new Promise(function(resolve, reject) {
        var image = new Image;
        for (var key in init) image[key] = init[key];
        image.onerror = reject;
        image.onload = function() { resolve(image); };
        image.src = input;
      });
    }

    function constant(x) {
      return function constant() {
        return x;
      };
    }

    const abs = Math.abs;
    const atan2 = Math.atan2;
    const cos = Math.cos;
    const max = Math.max;
    const min = Math.min;
    const sin = Math.sin;
    const sqrt = Math.sqrt;

    const epsilon = 1e-12;
    const pi = Math.PI;
    const halfPi = pi / 2;
    const tau = 2 * pi;

    function acos(x) {
      return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
    }

    function asin(x) {
      return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
    }

    function arcInnerRadius(d) {
      return d.innerRadius;
    }

    function arcOuterRadius(d) {
      return d.outerRadius;
    }

    function arcStartAngle(d) {
      return d.startAngle;
    }

    function arcEndAngle(d) {
      return d.endAngle;
    }

    function arcPadAngle(d) {
      return d && d.padAngle; // Note: optional!
    }

    function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
      var x10 = x1 - x0, y10 = y1 - y0,
          x32 = x3 - x2, y32 = y3 - y2,
          t = y32 * x10 - x32 * y10;
      if (t * t < epsilon) return;
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
      return [x0 + t * x10, y0 + t * y10];
    }

    // Compute perpendicular offset line of length rc.
    // http://mathworld.wolfram.com/Circle-LineIntersection.html
    function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
      var x01 = x0 - x1,
          y01 = y0 - y1,
          lo = (cw ? rc : -rc) / sqrt(x01 * x01 + y01 * y01),
          ox = lo * y01,
          oy = -lo * x01,
          x11 = x0 + ox,
          y11 = y0 + oy,
          x10 = x1 + ox,
          y10 = y1 + oy,
          x00 = (x11 + x10) / 2,
          y00 = (y11 + y10) / 2,
          dx = x10 - x11,
          dy = y10 - y11,
          d2 = dx * dx + dy * dy,
          r = r1 - rc,
          D = x11 * y10 - x10 * y11,
          d = (dy < 0 ? -1 : 1) * sqrt(max(0, r * r * d2 - D * D)),
          cx0 = (D * dy - dx * d) / d2,
          cy0 = (-D * dx - dy * d) / d2,
          cx1 = (D * dy + dx * d) / d2,
          cy1 = (-D * dx + dy * d) / d2,
          dx0 = cx0 - x00,
          dy0 = cy0 - y00,
          dx1 = cx1 - x00,
          dy1 = cy1 - y00;

      // Pick the closer of the two intersection points.
      // TODO Is there a faster way to determine which intersection to use?
      if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

      return {
        cx: cx0,
        cy: cy0,
        x01: -ox,
        y01: -oy,
        x11: cx0 * (r1 / r - 1),
        y11: cy0 * (r1 / r - 1)
      };
    }

    function arc() {
      var innerRadius = arcInnerRadius,
          outerRadius = arcOuterRadius,
          cornerRadius = constant(0),
          padRadius = null,
          startAngle = arcStartAngle,
          endAngle = arcEndAngle,
          padAngle = arcPadAngle,
          context = null;

      function arc() {
        var buffer,
            r,
            r0 = +innerRadius.apply(this, arguments),
            r1 = +outerRadius.apply(this, arguments),
            a0 = startAngle.apply(this, arguments) - halfPi,
            a1 = endAngle.apply(this, arguments) - halfPi,
            da = abs(a1 - a0),
            cw = a1 > a0;

        if (!context) context = buffer = path();

        // Ensure that the outer radius is always larger than the inner radius.
        if (r1 < r0) r = r1, r1 = r0, r0 = r;

        // Is it a point?
        if (!(r1 > epsilon)) context.moveTo(0, 0);

        // Or is it a circle or annulus?
        else if (da > tau - epsilon) {
          context.moveTo(r1 * cos(a0), r1 * sin(a0));
          context.arc(0, 0, r1, a0, a1, !cw);
          if (r0 > epsilon) {
            context.moveTo(r0 * cos(a1), r0 * sin(a1));
            context.arc(0, 0, r0, a1, a0, cw);
          }
        }

        // Or is it a circular or annular sector?
        else {
          var a01 = a0,
              a11 = a1,
              a00 = a0,
              a10 = a1,
              da0 = da,
              da1 = da,
              ap = padAngle.apply(this, arguments) / 2,
              rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : sqrt(r0 * r0 + r1 * r1)),
              rc = min(abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
              rc0 = rc,
              rc1 = rc,
              t0,
              t1;

          // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
          if (rp > epsilon) {
            var p0 = asin(rp / r0 * sin(ap)),
                p1 = asin(rp / r1 * sin(ap));
            if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
            else da0 = 0, a00 = a10 = (a0 + a1) / 2;
            if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
            else da1 = 0, a01 = a11 = (a0 + a1) / 2;
          }

          var x01 = r1 * cos(a01),
              y01 = r1 * sin(a01),
              x10 = r0 * cos(a10),
              y10 = r0 * sin(a10);

          // Apply rounded corners?
          if (rc > epsilon) {
            var x11 = r1 * cos(a11),
                y11 = r1 * sin(a11),
                x00 = r0 * cos(a00),
                y00 = r0 * sin(a00),
                oc;

            // Restrict the corner radius according to the sector angle.
            if (da < pi && (oc = intersect(x01, y01, x00, y00, x11, y11, x10, y10))) {
              var ax = x01 - oc[0],
                  ay = y01 - oc[1],
                  bx = x11 - oc[0],
                  by = y11 - oc[1],
                  kc = 1 / sin(acos((ax * bx + ay * by) / (sqrt(ax * ax + ay * ay) * sqrt(bx * bx + by * by))) / 2),
                  lc = sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
              rc0 = min(rc, (r0 - lc) / (kc - 1));
              rc1 = min(rc, (r1 - lc) / (kc + 1));
            }
          }

          // Is the sector collapsed to a line?
          if (!(da1 > epsilon)) context.moveTo(x01, y01);

          // Does the sector’s outer ring have rounded corners?
          else if (rc1 > epsilon) {
            t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
            t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

            context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

            // Have the corners merged?
            if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

            // Otherwise, draw the two corners and the ring.
            else {
              context.arc(t0.cx, t0.cy, rc1, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
              context.arc(0, 0, r1, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
              context.arc(t1.cx, t1.cy, rc1, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
            }
          }

          // Or is the outer ring just a circular arc?
          else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

          // Is there no inner ring, and it’s a circular sector?
          // Or perhaps it’s an annular sector collapsed due to padding?
          if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);

          // Does the sector’s inner ring (or point) have rounded corners?
          else if (rc0 > epsilon) {
            t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
            t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

            context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

            // Have the corners merged?
            if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t1.y01, t1.x01), !cw);

            // Otherwise, draw the two corners and the ring.
            else {
              context.arc(t0.cx, t0.cy, rc0, atan2(t0.y01, t0.x01), atan2(t0.y11, t0.x11), !cw);
              context.arc(0, 0, r0, atan2(t0.cy + t0.y11, t0.cx + t0.x11), atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
              context.arc(t1.cx, t1.cy, rc0, atan2(t1.y11, t1.x11), atan2(t1.y01, t1.x01), !cw);
            }
          }

          // Or is the inner ring just a circular arc?
          else context.arc(0, 0, r0, a10, a00, cw);
        }

        context.closePath();

        if (buffer) return context = null, buffer + "" || null;
      }

      arc.centroid = function() {
        var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
            a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
        return [cos(a) * r, sin(a) * r];
      };

      arc.innerRadius = function(_) {
        return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
      };

      arc.outerRadius = function(_) {
        return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
      };

      arc.cornerRadius = function(_) {
        return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
      };

      arc.padRadius = function(_) {
        return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
      };

      arc.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
      };

      arc.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
      };

      arc.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
      };

      arc.context = function(_) {
        return arguments.length ? ((context = _ == null ? null : _), arc) : context;
      };

      return arc;
    }

    function array(x) {
      return typeof x === "object" && "length" in x
        ? x // Array, TypedArray, NodeList, array-like
        : Array.from(x); // Map, Set, iterable, string, or anything else
    }

    function Linear(context) {
      this._context = context;
    }

    Linear.prototype = {
      areaStart: function() {
        this._line = 0;
      },
      areaEnd: function() {
        this._line = NaN;
      },
      lineStart: function() {
        this._point = 0;
      },
      lineEnd: function() {
        if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
        this._line = 1 - this._line;
      },
      point: function(x, y) {
        x = +x, y = +y;
        switch (this._point) {
          case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
          case 1: this._point = 2; // falls through
          default: this._context.lineTo(x, y); break;
        }
      }
    };

    function curveLinear(context) {
      return new Linear(context);
    }

    function x(p) {
      return p[0];
    }

    function y(p) {
      return p[1];
    }

    function line(x$1, y$1) {
      var defined = constant(true),
          context = null,
          curve = curveLinear,
          output = null;

      x$1 = typeof x$1 === "function" ? x$1 : (x$1 === undefined) ? x : constant(x$1);
      y$1 = typeof y$1 === "function" ? y$1 : (y$1 === undefined) ? y : constant(y$1);

      function line(data) {
        var i,
            n = (data = array(data)).length,
            d,
            defined0 = false,
            buffer;

        if (context == null) output = curve(buffer = path());

        for (i = 0; i <= n; ++i) {
          if (!(i < n && defined(d = data[i], i, data)) === defined0) {
            if (defined0 = !defined0) output.lineStart();
            else output.lineEnd();
          }
          if (defined0) output.point(+x$1(d, i, data), +y$1(d, i, data));
        }

        if (buffer) return output = null, buffer + "" || null;
      }

      line.x = function(_) {
        return arguments.length ? (x$1 = typeof _ === "function" ? _ : constant(+_), line) : x$1;
      };

      line.y = function(_) {
        return arguments.length ? (y$1 = typeof _ === "function" ? _ : constant(+_), line) : y$1;
      };

      line.defined = function(_) {
        return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
      };

      line.curve = function(_) {
        return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
      };

      line.context = function(_) {
        return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
      };

      return line;
    }

    function descending(a, b) {
      return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
    }

    function identity(d) {
      return d;
    }

    function pie$1() {
      var value = identity,
          sortValues = descending,
          sort = null,
          startAngle = constant(0),
          endAngle = constant(tau),
          padAngle = constant(0);

      function pie(data) {
        var i,
            n = (data = array(data)).length,
            j,
            k,
            sum = 0,
            index = new Array(n),
            arcs = new Array(n),
            a0 = +startAngle.apply(this, arguments),
            da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
            a1,
            p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
            pa = p * (da < 0 ? -1 : 1),
            v;

        for (i = 0; i < n; ++i) {
          if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
            sum += v;
          }
        }

        // Optionally sort the arcs by previously-computed values or by data.
        if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
        else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

        // Compute the arcs! They are stored in the original data's order.
        for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
          j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
            data: data[j],
            index: i,
            value: v,
            startAngle: a0,
            endAngle: a1,
            padAngle: p
          };
        }

        return arcs;
      }

      pie.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
      };

      pie.sortValues = function(_) {
        return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
      };

      pie.sort = function(_) {
        return arguments.length ? (sort = _, sortValues = null, pie) : sort;
      };

      pie.startAngle = function(_) {
        return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
      };

      pie.endAngle = function(_) {
        return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
      };

      pie.padAngle = function(_) {
        return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
      };

      return pie;
    }

    const defaultConf = {
        padding: '2em',
        desktopViewport: 1024,
        defaultWidth: 300,
    };

    let colourPalette = {
        default: {
            primary: '#003087',
            secondary: '#005bbb',
            background: '#f6f8f8',
            text: '#231f20',
            text2: '#3f525f',
        },
        dark: {
            primary: '#fa9200',
            secondary: '#fdebd1',
            background: '#3f525f',
            text: '#ffffff',
            text2: '#ffffff',
        },
        coloured: {
            primary: '#fae100',
            secondary: '#fefce5',
            background: '#005bbb',
            text: '#ffffff',
            text2: '#ffffff',
        }
    };
    function createPalette(name, colours) {
        colourPalette[name] = colours;
    }
    function getPalette(palette) {
        let paletteId = 'default';
        if (typeof palette == "string" && colourPalette[palette]) {
            paletteId = palette;
        }
        if (typeof palette == "object" && palette.basePalette) {
            paletteId = palette.basePalette;
        }
        let paletteObj = colourPalette[paletteId];
        if (typeof palette == "object") {
            paletteObj = Object.assign(Object.assign({}, paletteObj), palette);
        }
        return paletteObj;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

    var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }

    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      _setPrototypeOf(subClass, superClass);
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    var plainObjectConstrurctor = {}.constructor;
    function cloneStyle(style) {
      if (style == null || typeof style !== 'object') return style;
      if (Array.isArray(style)) return style.map(cloneStyle);
      if (style.constructor !== plainObjectConstrurctor) return style;
      var newStyle = {};

      for (var name in style) {
        newStyle[name] = cloneStyle(style[name]);
      }

      return newStyle;
    }

    /**
     * Create a rule instance.
     */

    function createRule(name, decl, options) {
      if (name === void 0) {
        name = 'unnamed';
      }

      var jss = options.jss;
      var declCopy = cloneStyle(decl);
      var rule = jss.plugins.onCreateRule(name, declCopy, options);
      if (rule) return rule; // It is an at-rule and it has no instance.

      if (name[0] === '@') ;

      return null;
    }

    var join = function join(value, by) {
      var result = '';

      for (var i = 0; i < value.length; i++) {
        // Remove !important from the value, it will be readded later.
        if (value[i] === '!important') break;
        if (result) result += by;
        result += value[i];
      }

      return result;
    };
    /**
     * Converts JSS array value to a CSS string.
     *
     * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
     * `border: ['1px', '2px']` > `border: 1px, 2px;`
     * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
     * `color: ['red', !important]` > `color: red !important;`
     */


    var toCssValue = function toCssValue(value, ignoreImportant) {
      if (ignoreImportant === void 0) {
        ignoreImportant = false;
      }

      if (!Array.isArray(value)) return value;
      var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

      if (Array.isArray(value[0])) {
        for (var i = 0; i < value.length; i++) {
          if (value[i] === '!important') break;
          if (cssValue) cssValue += ', ';
          cssValue += join(value[i], ' ');
        }
      } else cssValue = join(value, ', '); // Add !important, because it was ignored.


      if (!ignoreImportant && value[value.length - 1] === '!important') {
        cssValue += ' !important';
      }

      return cssValue;
    };

    function getWhitespaceSymbols(options) {
      if (options && options.format === false) {
        return {
          linebreak: '',
          space: ''
        };
      }

      return {
        linebreak: '\n',
        space: ' '
      };
    }

    /**
     * Indent a string.
     * http://jsperf.com/array-join-vs-for
     */

    function indentStr(str, indent) {
      var result = '';

      for (var index = 0; index < indent; index++) {
        result += '  ';
      }

      return result + str;
    }
    /**
     * Converts a Rule to CSS string.
     */


    function toCss(selector, style, options) {
      if (options === void 0) {
        options = {};
      }

      var result = '';
      if (!style) return result;
      var _options = options,
          _options$indent = _options.indent,
          indent = _options$indent === void 0 ? 0 : _options$indent;
      var fallbacks = style.fallbacks;

      if (options.format === false) {
        indent = -Infinity;
      }

      var _getWhitespaceSymbols = getWhitespaceSymbols(options),
          linebreak = _getWhitespaceSymbols.linebreak,
          space = _getWhitespaceSymbols.space;

      if (selector) indent++; // Apply fallbacks first.

      if (fallbacks) {
        // Array syntax {fallbacks: [{prop: value}]}
        if (Array.isArray(fallbacks)) {
          for (var index = 0; index < fallbacks.length; index++) {
            var fallback = fallbacks[index];

            for (var prop in fallback) {
              var value = fallback[prop];

              if (value != null) {
                if (result) result += linebreak;
                result += indentStr(prop + ":" + space + toCssValue(value) + ";", indent);
              }
            }
          }
        } else {
          // Object syntax {fallbacks: {prop: value}}
          for (var _prop in fallbacks) {
            var _value = fallbacks[_prop];

            if (_value != null) {
              if (result) result += linebreak;
              result += indentStr(_prop + ":" + space + toCssValue(_value) + ";", indent);
            }
          }
        }
      }

      for (var _prop2 in style) {
        var _value2 = style[_prop2];

        if (_value2 != null && _prop2 !== 'fallbacks') {
          if (result) result += linebreak;
          result += indentStr(_prop2 + ":" + space + toCssValue(_value2) + ";", indent);
        }
      } // Allow empty style in this case, because properties will be added dynamically.


      if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

      if (!selector) return result;
      indent--;
      if (result) result = "" + linebreak + result + linebreak;
      return indentStr("" + selector + space + "{" + result, indent) + indentStr('}', indent);
    }

    var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
    var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
    var escape = (function (str) {
      return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
    });

    var BaseStyleRule =
    /*#__PURE__*/
    function () {
      function BaseStyleRule(key, style, options) {
        this.type = 'style';
        this.isProcessed = false;
        var sheet = options.sheet,
            Renderer = options.Renderer;
        this.key = key;
        this.options = options;
        this.style = style;
        if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
      }
      /**
       * Get or set a style property.
       */


      var _proto = BaseStyleRule.prototype;

      _proto.prop = function prop(name, value, options) {
        // It's a getter.
        if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

        var force = options ? options.force : false;
        if (!force && this.style[name] === value) return this;
        var newValue = value;

        if (!options || options.process !== false) {
          newValue = this.options.jss.plugins.onChangeValue(value, name, this);
        }

        var isEmpty = newValue == null || newValue === false;
        var isDefined = name in this.style; // Value is empty and wasn't defined before.

        if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

        var remove = isEmpty && isDefined;
        if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

        if (this.renderable && this.renderer) {
          if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
          return this;
        }

        var sheet = this.options.sheet;

        if (sheet && sheet.attached) ;

        return this;
      };

      return BaseStyleRule;
    }();
    var StyleRule =
    /*#__PURE__*/
    function (_BaseStyleRule) {
      _inheritsLoose(StyleRule, _BaseStyleRule);

      function StyleRule(key, style, options) {
        var _this;

        _this = _BaseStyleRule.call(this, key, style, options) || this;
        var selector = options.selector,
            scoped = options.scoped,
            sheet = options.sheet,
            generateId = options.generateId;

        if (selector) {
          _this.selectorText = selector;
        } else if (scoped !== false) {
          _this.id = generateId(_assertThisInitialized(_assertThisInitialized(_this)), sheet);
          _this.selectorText = "." + escape(_this.id);
        }

        return _this;
      }
      /**
       * Set selector string.
       * Attention: use this with caution. Most browsers didn't implement
       * selectorText setter, so this may result in rerendering of entire Style Sheet.
       */


      var _proto2 = StyleRule.prototype;

      /**
       * Apply rule to an element inline.
       */
      _proto2.applyTo = function applyTo(renderable) {
        var renderer = this.renderer;

        if (renderer) {
          var json = this.toJSON();

          for (var prop in json) {
            renderer.setProperty(renderable, prop, json[prop]);
          }
        }

        return this;
      }
      /**
       * Returns JSON representation of the rule.
       * Fallbacks are not supported.
       * Useful for inline styles.
       */
      ;

      _proto2.toJSON = function toJSON() {
        var json = {};

        for (var prop in this.style) {
          var value = this.style[prop];
          if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
        }

        return json;
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto2.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.selectorText, this.style, opts);
      };

      _createClass(StyleRule, [{
        key: "selector",
        set: function set(selector) {
          if (selector === this.selectorText) return;
          this.selectorText = selector;
          var renderer = this.renderer,
              renderable = this.renderable;
          if (!renderable || !renderer) return;
          var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

          if (!hasChanged) {
            renderer.replaceRule(renderable, this);
          }
        }
        /**
         * Get selector string.
         */
        ,
        get: function get() {
          return this.selectorText;
        }
      }]);

      return StyleRule;
    }(BaseStyleRule);
    var pluginStyleRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        if (key[0] === '@' || options.parent && options.parent.type === 'keyframes') {
          return null;
        }

        return new StyleRule(key, style, options);
      }
    };

    var defaultToStringOptions = {
      indent: 1,
      children: true
    };
    var atRegExp = /@([\w-]+)/;
    /**
     * Conditional rule for @media, @supports
     */

    var ConditionalRule =
    /*#__PURE__*/
    function () {
      function ConditionalRule(key, styles, options) {
        this.type = 'conditional';
        this.isProcessed = false;
        this.key = key;
        var atMatch = key.match(atRegExp);
        this.at = atMatch ? atMatch[1] : 'unknown'; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

        this.query = options.name || "@" + this.at;
        this.options = options;
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */


      var _proto = ConditionalRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Create and register rule, run plugins.
       */
      ;

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Replace rule, run plugins.
       */
      ;

      _proto.replaceRule = function replaceRule(name, style, options) {
        var newRule = this.rules.replace(name, style, options);
        if (newRule) this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions;
        }

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
            linebreak = _getWhitespaceSymbols.linebreak;

        if (options.indent == null) options.indent = defaultToStringOptions.indent;
        if (options.children == null) options.children = defaultToStringOptions.children;

        if (options.children === false) {
          return this.query + " {}";
        }

        var children = this.rules.toString(options);
        return children ? this.query + " {" + linebreak + children + linebreak + "}" : '';
      };

      return ConditionalRule;
    }();
    var keyRegExp = /@media|@supports\s+/;
    var pluginConditionalRule = {
      onCreateRule: function onCreateRule(key, styles, options) {
        return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
      }
    };

    var defaultToStringOptions$1 = {
      indent: 1,
      children: true
    };
    var nameRegExp = /@keyframes\s+([\w-]+)/;
    /**
     * Rule for @keyframes
     */

    var KeyframesRule =
    /*#__PURE__*/
    function () {
      function KeyframesRule(key, frames, options) {
        this.type = 'keyframes';
        this.at = '@keyframes';
        this.isProcessed = false;
        var nameMatch = key.match(nameRegExp);

        if (nameMatch && nameMatch[1]) {
          this.name = nameMatch[1];
        } else {
          this.name = 'noname';
        }

        this.key = this.type + "-" + this.name;
        this.options = options;
        var scoped = options.scoped,
            sheet = options.sheet,
            generateId = options.generateId;
        this.id = scoped === false ? this.name : escape(generateId(this, sheet));
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var name in frames) {
          this.rules.add(name, frames[name], _extends({}, options, {
            parent: this
          }));
        }

        this.rules.process();
      }
      /**
       * Generates a CSS string.
       */


      var _proto = KeyframesRule.prototype;

      _proto.toString = function toString(options) {
        if (options === void 0) {
          options = defaultToStringOptions$1;
        }

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
            linebreak = _getWhitespaceSymbols.linebreak;

        if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
        if (options.children == null) options.children = defaultToStringOptions$1.children;

        if (options.children === false) {
          return this.at + " " + this.id + " {}";
        }

        var children = this.rules.toString(options);
        if (children) children = "" + linebreak + children + linebreak;
        return this.at + " " + this.id + " {" + children + "}";
      };

      return KeyframesRule;
    }();
    var keyRegExp$1 = /@keyframes\s+/;
    var refRegExp$1 = /\$([\w-]+)/g;

    var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
      if (typeof val === 'string') {
        return val.replace(refRegExp$1, function (match, name) {
          if (name in keyframes) {
            return keyframes[name];
          }
          return match;
        });
      }

      return val;
    };
    /**
     * Replace the reference for a animation name.
     */


    var replaceRef = function replaceRef(style, prop, keyframes) {
      var value = style[prop];
      var refKeyframe = findReferencedKeyframe(value, keyframes);

      if (refKeyframe !== value) {
        style[prop] = refKeyframe;
      }
    };

    var pluginKeyframesRule = {
      onCreateRule: function onCreateRule(key, frames, options) {
        return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
      },
      // Animation name ref replacer.
      onProcessStyle: function onProcessStyle(style, rule, sheet) {
        if (rule.type !== 'style' || !sheet) return style;
        if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
        if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
        return style;
      },
      onChangeValue: function onChangeValue(val, prop, rule) {
        var sheet = rule.options.sheet;

        if (!sheet) {
          return val;
        }

        switch (prop) {
          case 'animation':
            return findReferencedKeyframe(val, sheet.keyframes);

          case 'animation-name':
            return findReferencedKeyframe(val, sheet.keyframes);

          default:
            return val;
        }
      }
    };

    var KeyframeRule =
    /*#__PURE__*/
    function (_BaseStyleRule) {
      _inheritsLoose(KeyframeRule, _BaseStyleRule);

      function KeyframeRule() {
        return _BaseStyleRule.apply(this, arguments) || this;
      }

      var _proto = KeyframeRule.prototype;

      /**
       * Generates a CSS string.
       */
      _proto.toString = function toString(options) {
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;
        var opts = link ? _extends({}, options, {
          allowEmpty: true
        }) : options;
        return toCss(this.key, this.style, opts);
      };

      return KeyframeRule;
    }(BaseStyleRule);
    var pluginKeyframeRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        if (options.parent && options.parent.type === 'keyframes') {
          return new KeyframeRule(key, style, options);
        }

        return null;
      }
    };

    var FontFaceRule =
    /*#__PURE__*/
    function () {
      function FontFaceRule(key, style, options) {
        this.type = 'font-face';
        this.at = '@font-face';
        this.isProcessed = false;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */


      var _proto = FontFaceRule.prototype;

      _proto.toString = function toString(options) {
        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
            linebreak = _getWhitespaceSymbols.linebreak;

        if (Array.isArray(this.style)) {
          var str = '';

          for (var index = 0; index < this.style.length; index++) {
            str += toCss(this.at, this.style[index]);
            if (this.style[index + 1]) str += linebreak;
          }

          return str;
        }

        return toCss(this.at, this.style, options);
      };

      return FontFaceRule;
    }();
    var keyRegExp$2 = /@font-face/;
    var pluginFontFaceRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
      }
    };

    var ViewportRule =
    /*#__PURE__*/
    function () {
      function ViewportRule(key, style, options) {
        this.type = 'viewport';
        this.at = '@viewport';
        this.isProcessed = false;
        this.key = key;
        this.style = style;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */


      var _proto = ViewportRule.prototype;

      _proto.toString = function toString(options) {
        return toCss(this.key, this.style, options);
      };

      return ViewportRule;
    }();
    var pluginViewportRule = {
      onCreateRule: function onCreateRule(key, style, options) {
        return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
      }
    };

    var SimpleRule =
    /*#__PURE__*/
    function () {
      function SimpleRule(key, value, options) {
        this.type = 'simple';
        this.isProcessed = false;
        this.key = key;
        this.value = value;
        this.options = options;
      }
      /**
       * Generates a CSS string.
       */
      // eslint-disable-next-line no-unused-vars


      var _proto = SimpleRule.prototype;

      _proto.toString = function toString(options) {
        if (Array.isArray(this.value)) {
          var str = '';

          for (var index = 0; index < this.value.length; index++) {
            str += this.key + " " + this.value[index] + ";";
            if (this.value[index + 1]) str += '\n';
          }

          return str;
        }

        return this.key + " " + this.value + ";";
      };

      return SimpleRule;
    }();
    var keysMap = {
      '@charset': true,
      '@import': true,
      '@namespace': true
    };
    var pluginSimpleRule = {
      onCreateRule: function onCreateRule(key, value, options) {
        return key in keysMap ? new SimpleRule(key, value, options) : null;
      }
    };

    var plugins$1 = [pluginStyleRule, pluginConditionalRule, pluginKeyframesRule, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

    var defaultUpdateOptions = {
      process: true
    };
    var forceUpdateOptions = {
      force: true,
      process: true
      /**
       * Contains rules objects and allows adding/removing etc.
       * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
       */

    };

    var RuleList =
    /*#__PURE__*/
    function () {
      // Rules registry for access by .get() method.
      // It contains the same rule registered by name and by selector.
      // Original styles object.
      // Used to ensure correct rules order.
      function RuleList(options) {
        this.map = {};
        this.raw = {};
        this.index = [];
        this.counter = 0;
        this.options = options;
        this.classes = options.classes;
        this.keyframes = options.keyframes;
      }
      /**
       * Create and register rule.
       *
       * Will not render after Style Sheet was rendered the first time.
       */


      var _proto = RuleList.prototype;

      _proto.add = function add(name, decl, ruleOptions) {
        var _this$options = this.options,
            parent = _this$options.parent,
            sheet = _this$options.sheet,
            jss = _this$options.jss,
            Renderer = _this$options.Renderer,
            generateId = _this$options.generateId,
            scoped = _this$options.scoped;

        var options = _extends({
          classes: this.classes,
          parent: parent,
          sheet: sheet,
          jss: jss,
          Renderer: Renderer,
          generateId: generateId,
          scoped: scoped,
          name: name,
          keyframes: this.keyframes,
          selector: undefined
        }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
        // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
        // we need to make the key unique within this RuleList instance scope.


        var key = name;

        if (name in this.raw) {
          key = name + "-d" + this.counter++;
        } // We need to save the original decl before creating the rule
        // because cache plugin needs to use it as a key to return a cached rule.


        this.raw[key] = decl;

        if (key in this.classes) {
          // E.g. rules inside of @media container
          options.selector = "." + escape(this.classes[key]);
        }

        var rule = createRule(key, decl, options);
        if (!rule) return null;
        this.register(rule);
        var index = options.index === undefined ? this.index.length : options.index;
        this.index.splice(index, 0, rule);
        return rule;
      }
      /**
       * Replace rule.
       * Create a new rule and remove old one instead of overwriting
       * because we want to invoke onCreateRule hook to make plugins work.
       */
      ;

      _proto.replace = function replace(name, decl, ruleOptions) {
        var oldRule = this.get(name);
        var oldIndex = this.index.indexOf(oldRule);

        if (oldRule) {
          this.remove(oldRule);
        }

        var options = ruleOptions;
        if (oldIndex !== -1) options = _extends({}, ruleOptions, {
          index: oldIndex
        });
        return this.add(name, decl, options);
      }
      /**
       * Get a rule by name or selector.
       */
      ;

      _proto.get = function get(nameOrSelector) {
        return this.map[nameOrSelector];
      }
      /**
       * Delete a rule.
       */
      ;

      _proto.remove = function remove(rule) {
        this.unregister(rule);
        delete this.raw[rule.key];
        this.index.splice(this.index.indexOf(rule), 1);
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.index.indexOf(rule);
      }
      /**
       * Run `onProcessRule()` plugins on every rule.
       */
      ;

      _proto.process = function process() {
        var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
        // we end up with very hard-to-track-down side effects.

        this.index.slice(0).forEach(plugins.onProcessRule, plugins);
      }
      /**
       * Register a rule in `.map`, `.classes` and `.keyframes` maps.
       */
      ;

      _proto.register = function register(rule) {
        this.map[rule.key] = rule;

        if (rule instanceof StyleRule) {
          this.map[rule.selector] = rule;
          if (rule.id) this.classes[rule.key] = rule.id;
        } else if (rule instanceof KeyframesRule && this.keyframes) {
          this.keyframes[rule.name] = rule.id;
        }
      }
      /**
       * Unregister a rule.
       */
      ;

      _proto.unregister = function unregister(rule) {
        delete this.map[rule.key];

        if (rule instanceof StyleRule) {
          delete this.map[rule.selector];
          delete this.classes[rule.key];
        } else if (rule instanceof KeyframesRule) {
          delete this.keyframes[rule.name];
        }
      }
      /**
       * Update the function values with a new data.
       */
      ;

      _proto.update = function update() {
        var name;
        var data;
        var options;

        if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
          name = arguments.length <= 0 ? undefined : arguments[0];
          data = arguments.length <= 1 ? undefined : arguments[1];
          options = arguments.length <= 2 ? undefined : arguments[2];
        } else {
          data = arguments.length <= 0 ? undefined : arguments[0];
          options = arguments.length <= 1 ? undefined : arguments[1];
          name = null;
        }

        if (name) {
          this.updateOne(this.get(name), data, options);
        } else {
          for (var index = 0; index < this.index.length; index++) {
            this.updateOne(this.index[index], data, options);
          }
        }
      }
      /**
       * Execute plugins, update rule props.
       */
      ;

      _proto.updateOne = function updateOne(rule, data, options) {
        if (options === void 0) {
          options = defaultUpdateOptions;
        }

        var _this$options2 = this.options,
            plugins = _this$options2.jss.plugins,
            sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

        if (rule.rules instanceof RuleList) {
          rule.rules.update(data, options);
          return;
        }

        var style = rule.style;
        plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

        if (options.process && style && style !== rule.style) {
          // We need to run the plugins in case new `style` relies on syntax plugins.
          plugins.onProcessStyle(rule.style, rule, sheet); // Update and add props.

          for (var prop in rule.style) {
            var nextValue = rule.style[prop];
            var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (nextValue !== prevValue) {
              rule.prop(prop, nextValue, forceUpdateOptions);
            }
          } // Remove props.


          for (var _prop in style) {
            var _nextValue = rule.style[_prop];
            var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
            // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

            if (_nextValue == null && _nextValue !== _prevValue) {
              rule.prop(_prop, null, forceUpdateOptions);
            }
          }
        }
      }
      /**
       * Convert rules to a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        var str = '';
        var sheet = this.options.sheet;
        var link = sheet ? sheet.options.link : false;

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
            linebreak = _getWhitespaceSymbols.linebreak;

        for (var index = 0; index < this.index.length; index++) {
          var rule = this.index[index];
          var css = rule.toString(options); // No need to render an empty rule.

          if (!css && !link) continue;
          if (str) str += linebreak;
          str += css;
        }

        return str;
      };

      return RuleList;
    }();

    var StyleSheet =
    /*#__PURE__*/
    function () {
      function StyleSheet(styles, options) {
        this.attached = false;
        this.deployed = false;
        this.classes = {};
        this.keyframes = {};
        this.options = _extends({}, options, {
          sheet: this,
          parent: this,
          classes: this.classes,
          keyframes: this.keyframes
        });

        if (options.Renderer) {
          this.renderer = new options.Renderer(this);
        }

        this.rules = new RuleList(this.options);

        for (var name in styles) {
          this.rules.add(name, styles[name]);
        }

        this.rules.process();
      }
      /**
       * Attach renderable to the render tree.
       */


      var _proto = StyleSheet.prototype;

      _proto.attach = function attach() {
        if (this.attached) return this;
        if (this.renderer) this.renderer.attach();
        this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

        if (!this.deployed) this.deploy();
        return this;
      }
      /**
       * Remove renderable from render tree.
       */
      ;

      _proto.detach = function detach() {
        if (!this.attached) return this;
        if (this.renderer) this.renderer.detach();
        this.attached = false;
        return this;
      }
      /**
       * Add a rule to the current stylesheet.
       * Will insert a rule also after the stylesheet has been rendered first time.
       */
      ;

      _proto.addRule = function addRule(name, decl, options) {
        var queue = this.queue; // Plugins can create rules.
        // In order to preserve the right order, we need to queue all `.addRule` calls,
        // which happen after the first `rules.add()` call.

        if (this.attached && !queue) this.queue = [];
        var rule = this.rules.add(name, decl, options);
        if (!rule) return null;
        this.options.jss.plugins.onProcessRule(rule);

        if (this.attached) {
          if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.

          if (queue) queue.push(rule);else {
            this.insertRule(rule);

            if (this.queue) {
              this.queue.forEach(this.insertRule, this);
              this.queue = undefined;
            }
          }
          return rule;
        } // We can't add rules to a detached style node.
        // We will redeploy the sheet once user will attach it.


        this.deployed = false;
        return rule;
      }
      /**
       * Replace a rule in the current stylesheet.
       */
      ;

      _proto.replaceRule = function replaceRule(nameOrSelector, decl, options) {
        var oldRule = this.rules.get(nameOrSelector);
        if (!oldRule) return this.addRule(nameOrSelector, decl, options);
        var newRule = this.rules.replace(nameOrSelector, decl, options);

        if (newRule) {
          this.options.jss.plugins.onProcessRule(newRule);
        }

        if (this.attached) {
          if (!this.deployed) return newRule; // Don't replace / delete rule directly if there is no stringified version yet.
          // It will be inserted all together when .attach is called.

          if (this.renderer) {
            if (!newRule) {
              this.renderer.deleteRule(oldRule);
            } else if (oldRule.renderable) {
              this.renderer.replaceRule(oldRule.renderable, newRule);
            }
          }

          return newRule;
        } // We can't replace rules to a detached style node.
        // We will redeploy the sheet once user will attach it.


        this.deployed = false;
        return newRule;
      }
      /**
       * Insert rule into the StyleSheet
       */
      ;

      _proto.insertRule = function insertRule(rule) {
        if (this.renderer) {
          this.renderer.insertRule(rule);
        }
      }
      /**
       * Create and add rules.
       * Will render also after Style Sheet was rendered the first time.
       */
      ;

      _proto.addRules = function addRules(styles, options) {
        var added = [];

        for (var name in styles) {
          var rule = this.addRule(name, styles[name], options);
          if (rule) added.push(rule);
        }

        return added;
      }
      /**
       * Get a rule by name or selector.
       */
      ;

      _proto.getRule = function getRule(nameOrSelector) {
        return this.rules.get(nameOrSelector);
      }
      /**
       * Delete a rule by name.
       * Returns `true`: if rule has been deleted from the DOM.
       */
      ;

      _proto.deleteRule = function deleteRule(name) {
        var rule = typeof name === 'object' ? name : this.rules.get(name);

        if (!rule || // Style sheet was created without link: true and attached, in this case we
        // won't be able to remove the CSS rule from the DOM.
        this.attached && !rule.renderable) {
          return false;
        }

        this.rules.remove(rule);

        if (this.attached && rule.renderable && this.renderer) {
          return this.renderer.deleteRule(rule.renderable);
        }

        return true;
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Deploy pure CSS string to a renderable.
       */
      ;

      _proto.deploy = function deploy() {
        if (this.renderer) this.renderer.deploy();
        this.deployed = true;
        return this;
      }
      /**
       * Update the function values with a new data.
       */
      ;

      _proto.update = function update() {
        var _this$rules;

        (_this$rules = this.rules).update.apply(_this$rules, arguments);

        return this;
      }
      /**
       * Updates a single rule.
       */
      ;

      _proto.updateOne = function updateOne(rule, data, options) {
        this.rules.updateOne(rule, data, options);
        return this;
      }
      /**
       * Convert rules to a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };

      return StyleSheet;
    }();

    var PluginsRegistry =
    /*#__PURE__*/
    function () {
      function PluginsRegistry() {
        this.plugins = {
          internal: [],
          external: []
        };
        this.registry = {};
      }

      var _proto = PluginsRegistry.prototype;

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
      _proto.onCreateRule = function onCreateRule(name, decl, options) {
        for (var i = 0; i < this.registry.onCreateRule.length; i++) {
          var rule = this.registry.onCreateRule[i](name, decl, options);
          if (rule) return rule;
        }

        return null;
      }
      /**
       * Call `onProcessRule` hooks.
       */
      ;

      _proto.onProcessRule = function onProcessRule(rule) {
        if (rule.isProcessed) return;
        var sheet = rule.options.sheet;

        for (var i = 0; i < this.registry.onProcessRule.length; i++) {
          this.registry.onProcessRule[i](rule, sheet);
        }

        if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
        rule.isProcessed = true;
      }
      /**
       * Call `onProcessStyle` hooks.
       */
      ;

      _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
        for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
          rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
        }
      }
      /**
       * Call `onProcessSheet` hooks.
       */
      ;

      _proto.onProcessSheet = function onProcessSheet(sheet) {
        for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
          this.registry.onProcessSheet[i](sheet);
        }
      }
      /**
       * Call `onUpdate` hooks.
       */
      ;

      _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
        for (var i = 0; i < this.registry.onUpdate.length; i++) {
          this.registry.onUpdate[i](data, rule, sheet, options);
        }
      }
      /**
       * Call `onChangeValue` hooks.
       */
      ;

      _proto.onChangeValue = function onChangeValue(value, prop, rule) {
        var processedValue = value;

        for (var i = 0; i < this.registry.onChangeValue.length; i++) {
          processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
        }

        return processedValue;
      }
      /**
       * Register a plugin.
       */
      ;

      _proto.use = function use(newPlugin, options) {
        if (options === void 0) {
          options = {
            queue: 'external'
          };
        }

        var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

        if (plugins.indexOf(newPlugin) !== -1) {
          return;
        }

        plugins.push(newPlugin);
        this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
          for (var name in plugin) {
            if (name in registry) {
              registry[name].push(plugin[name]);
            }
          }

          return registry;
        }, {
          onCreateRule: [],
          onProcessRule: [],
          onProcessStyle: [],
          onProcessSheet: [],
          onChangeValue: [],
          onUpdate: []
        });
      };

      return PluginsRegistry;
    }();

    /**
     * Sheets registry to access all instances in one place.
     */

    var SheetsRegistry =
    /*#__PURE__*/
    function () {
      function SheetsRegistry() {
        this.registry = [];
      }

      var _proto = SheetsRegistry.prototype;

      /**
       * Register a Style Sheet.
       */
      _proto.add = function add(sheet) {
        var registry = this.registry;
        var index = sheet.options.index;
        if (registry.indexOf(sheet) !== -1) return;

        if (registry.length === 0 || index >= this.index) {
          registry.push(sheet);
          return;
        } // Find a position.


        for (var i = 0; i < registry.length; i++) {
          if (registry[i].options.index > index) {
            registry.splice(i, 0, sheet);
            return;
          }
        }
      }
      /**
       * Reset the registry.
       */
      ;

      _proto.reset = function reset() {
        this.registry = [];
      }
      /**
       * Remove a Style Sheet.
       */
      ;

      _proto.remove = function remove(sheet) {
        var index = this.registry.indexOf(sheet);
        this.registry.splice(index, 1);
      }
      /**
       * Convert all attached sheets to a CSS string.
       */
      ;

      _proto.toString = function toString(_temp) {
        var _ref = _temp === void 0 ? {} : _temp,
            attached = _ref.attached,
            options = _objectWithoutPropertiesLoose(_ref, ["attached"]);

        var _getWhitespaceSymbols = getWhitespaceSymbols(options),
            linebreak = _getWhitespaceSymbols.linebreak;

        var css = '';

        for (var i = 0; i < this.registry.length; i++) {
          var sheet = this.registry[i];

          if (attached != null && sheet.attached !== attached) {
            continue;
          }

          if (css) css += linebreak;
          css += sheet.toString(options);
        }

        return css;
      };

      _createClass(SheetsRegistry, [{
        key: "index",

        /**
         * Current highest index number.
         */
        get: function get() {
          return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
        }
      }]);

      return SheetsRegistry;
    }();

    /**
     * This is a global sheets registry. Only DomRenderer will add sheets to it.
     * On the server one should use an own SheetsRegistry instance and add the
     * sheets to it, because you need to make sure to create a new registry for
     * each request in order to not leak sheets across requests.
     */

    var sheets = new SheetsRegistry();

    /* eslint-disable */

    /**
     * Now that `globalThis` is available on most platforms
     * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis#browser_compatibility)
     * we check for `globalThis` first. `globalThis` is necessary for jss
     * to run in Agoric's secure version of JavaScript (SES). Under SES,
     * `globalThis` exists, but `window`, `self`, and `Function('return
     * this')()` are all undefined for security reasons.
     *
     * https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
     */
    var globalThis$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' && window.Math === Math ? window : typeof self !== 'undefined' && self.Math === Math ? self : Function('return this')();

    var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
    if (globalThis$1[ns] == null) globalThis$1[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
    // the current version with just one short number and use it for classes generation
    // we use a counter. Also it is more accurate, because user can manually reevaluate
    // the module.

    var moduleId = globalThis$1[ns]++;
    /**
     * Returns a function which generates unique class names based on counters.
     * When new generator function is created, rule counter is reseted.
     * We need to reset the rule counter for SSR for each request.
     */

    var createGenerateId = function createGenerateId(options) {
      if (options === void 0) {
        options = {};
      }

      var ruleCounter = 0;

      var generateId = function generateId(rule, sheet) {
        ruleCounter += 1;

        var jssId = '';
        var prefix = '';

        if (sheet) {
          if (sheet.options.classNamePrefix) {
            prefix = sheet.options.classNamePrefix;
          }

          if (sheet.options.jss.id != null) {
            jssId = String(sheet.options.jss.id);
          }
        }

        if (options.minify) {
          // Using "c" because a number can't be the first char in a class name.
          return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
        }

        return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
      };

      return generateId;
    };

    /**
     * Cache the value from the first time a function is called.
     */

    var memoize = function memoize(fn) {
      var value;
      return function () {
        if (!value) value = fn();
        return value;
      };
    };
    /**
     * Get a style property value.
     */


    var getPropertyValue = function getPropertyValue(cssRule, prop) {
      try {
        // Support CSSTOM.
        if (cssRule.attributeStyleMap) {
          return cssRule.attributeStyleMap.get(prop);
        }

        return cssRule.style.getPropertyValue(prop);
      } catch (err) {
        // IE may throw if property is unknown.
        return '';
      }
    };
    /**
     * Set a style property.
     */


    var setProperty = function setProperty(cssRule, prop, value) {
      try {
        var cssValue = value;

        if (Array.isArray(value)) {
          cssValue = toCssValue(value, true);

          if (value[value.length - 1] === '!important') {
            cssRule.style.setProperty(prop, cssValue, 'important');
            return true;
          }
        } // Support CSSTOM.


        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.set(prop, cssValue);
        } else {
          cssRule.style.setProperty(prop, cssValue);
        }
      } catch (err) {
        // IE may throw if property is unknown.
        return false;
      }

      return true;
    };
    /**
     * Remove a style property.
     */


    var removeProperty = function removeProperty(cssRule, prop) {
      try {
        // Support CSSTOM.
        if (cssRule.attributeStyleMap) {
          cssRule.attributeStyleMap.delete(prop);
        } else {
          cssRule.style.removeProperty(prop);
        }
      } catch (err) {
      }
    };
    /**
     * Set the selector.
     */


    var setSelector = function setSelector(cssRule, selectorText) {
      cssRule.selectorText = selectorText; // Return false if setter was not successful.
      // Currently works in chrome only.

      return cssRule.selectorText === selectorText;
    };
    /**
     * Gets the `head` element upon the first call and caches it.
     * We assume it can't be null.
     */


    var getHead = memoize(function () {
      return document.querySelector('head');
    });
    /**
     * Find attached sheet with an index higher than the passed one.
     */

    function findHigherSheet(registry, options) {
      for (var i = 0; i < registry.length; i++) {
        var sheet = registry[i];

        if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }

      return null;
    }
    /**
     * Find attached sheet with the highest index.
     */


    function findHighestSheet(registry, options) {
      for (var i = registry.length - 1; i >= 0; i--) {
        var sheet = registry[i];

        if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
          return sheet;
        }
      }

      return null;
    }
    /**
     * Find a comment with "jss" inside.
     */


    function findCommentNode(text) {
      var head = getHead();

      for (var i = 0; i < head.childNodes.length; i++) {
        var node = head.childNodes[i];

        if (node.nodeType === 8 && node.nodeValue.trim() === text) {
          return node;
        }
      }

      return null;
    }
    /**
     * Find a node before which we can insert the sheet.
     */


    function findPrevNode(options) {
      var registry = sheets.registry;

      if (registry.length > 0) {
        // Try to insert before the next higher sheet.
        var sheet = findHigherSheet(registry, options);

        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element
          };
        } // Otherwise insert after the last attached.


        sheet = findHighestSheet(registry, options);

        if (sheet && sheet.renderer) {
          return {
            parent: sheet.renderer.element.parentNode,
            node: sheet.renderer.element.nextSibling
          };
        }
      } // Try to find a comment placeholder if registry is empty.


      var insertionPoint = options.insertionPoint;

      if (insertionPoint && typeof insertionPoint === 'string') {
        var comment = findCommentNode(insertionPoint);

        if (comment) {
          return {
            parent: comment.parentNode,
            node: comment.nextSibling
          };
        } // If user specifies an insertion point and it can't be found in the document -
      }

      return false;
    }
    /**
     * Insert style element into the DOM.
     */


    function insertStyle(style, options) {
      var insertionPoint = options.insertionPoint;
      var nextNode = findPrevNode(options);

      if (nextNode !== false && nextNode.parent) {
        nextNode.parent.insertBefore(style, nextNode.node);
        return;
      } // Works with iframes and any node types.


      if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
        var insertionPointElement = insertionPoint;
        var parentNode = insertionPointElement.parentNode;
        if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);
        return;
      }

      getHead().appendChild(style);
    }
    /**
     * Read jss nonce setting from the page if the user has set it.
     */


    var getNonce = memoize(function () {
      var node = document.querySelector('meta[property="csp-nonce"]');
      return node ? node.getAttribute('content') : null;
    });

    var _insertRule = function insertRule(container, rule, index) {
      try {
        if ('insertRule' in container) {
          container.insertRule(rule, index);
        } // Keyframes rule.
        else if ('appendRule' in container) {
            container.appendRule(rule);
          }
      } catch (err) {
        return false;
      }

      return container.cssRules[index];
    };

    var getValidRuleInsertionIndex = function getValidRuleInsertionIndex(container, index) {
      var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

      if (index === undefined || index > maxIndex) {
        // eslint-disable-next-line no-param-reassign
        return maxIndex;
      }

      return index;
    };

    var createStyle = function createStyle() {
      var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
      // insert rules after we insert the style tag.
      // It seems to kick-off the source order specificity algorithm.

      el.textContent = '\n';
      return el;
    };

    var DomRenderer =
    /*#__PURE__*/
    function () {
      // Will be empty if link: true option is not set, because
      // it is only for use together with insertRule API.
      function DomRenderer(sheet) {
        this.getPropertyValue = getPropertyValue;
        this.setProperty = setProperty;
        this.removeProperty = removeProperty;
        this.setSelector = setSelector;
        this.hasInsertedRules = false;
        this.cssRules = [];
        // There is no sheet when the renderer is used from a standalone StyleRule.
        if (sheet) sheets.add(sheet);
        this.sheet = sheet;

        var _ref = this.sheet ? this.sheet.options : {},
            media = _ref.media,
            meta = _ref.meta,
            element = _ref.element;

        this.element = element || createStyle();
        this.element.setAttribute('data-jss', '');
        if (media) this.element.setAttribute('media', media);
        if (meta) this.element.setAttribute('data-meta', meta);
        var nonce = getNonce();
        if (nonce) this.element.setAttribute('nonce', nonce);
      }
      /**
       * Insert style element into render tree.
       */


      var _proto = DomRenderer.prototype;

      _proto.attach = function attach() {
        // In the case the element node is external and it is already in the DOM.
        if (this.element.parentNode || !this.sheet) return;
        insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
        // most browsers create a new CSSStyleSheet, except of all IEs.

        var deployed = Boolean(this.sheet && this.sheet.deployed);

        if (this.hasInsertedRules && deployed) {
          this.hasInsertedRules = false;
          this.deploy();
        }
      }
      /**
       * Remove style element from render tree.
       */
      ;

      _proto.detach = function detach() {
        if (!this.sheet) return;
        var parentNode = this.element.parentNode;
        if (parentNode) parentNode.removeChild(this.element); // In the most browsers, rules inserted using insertRule() API will be lost when style element is removed.
        // Though IE will keep them and we need a consistent behavior.

        if (this.sheet.options.link) {
          this.cssRules = [];
          this.element.textContent = '\n';
        }
      }
      /**
       * Inject CSS string into element.
       */
      ;

      _proto.deploy = function deploy() {
        var sheet = this.sheet;
        if (!sheet) return;

        if (sheet.options.link) {
          this.insertRules(sheet.rules);
          return;
        }

        this.element.textContent = "\n" + sheet.toString() + "\n";
      }
      /**
       * Insert RuleList into an element.
       */
      ;

      _proto.insertRules = function insertRules(rules, nativeParent) {
        for (var i = 0; i < rules.index.length; i++) {
          this.insertRule(rules.index[i], i, nativeParent);
        }
      }
      /**
       * Insert a rule into element.
       */
      ;

      _proto.insertRule = function insertRule(rule, index, nativeParent) {
        if (nativeParent === void 0) {
          nativeParent = this.element.sheet;
        }

        if (rule.rules) {
          var parent = rule;
          var latestNativeParent = nativeParent;

          if (rule.type === 'conditional' || rule.type === 'keyframes') {
            var _insertionIndex = getValidRuleInsertionIndex(nativeParent, index); // We need to render the container without children first.


            latestNativeParent = _insertRule(nativeParent, parent.toString({
              children: false
            }), _insertionIndex);

            if (latestNativeParent === false) {
              return false;
            }

            this.refCssRule(rule, _insertionIndex, latestNativeParent);
          }

          this.insertRules(parent.rules, latestNativeParent);
          return latestNativeParent;
        }

        var ruleStr = rule.toString();
        if (!ruleStr) return false;
        var insertionIndex = getValidRuleInsertionIndex(nativeParent, index);

        var nativeRule = _insertRule(nativeParent, ruleStr, insertionIndex);

        if (nativeRule === false) {
          return false;
        }

        this.hasInsertedRules = true;
        this.refCssRule(rule, insertionIndex, nativeRule);
        return nativeRule;
      };

      _proto.refCssRule = function refCssRule(rule, index, cssRule) {
        rule.renderable = cssRule; // We only want to reference the top level rules, deleteRule API doesn't support removing nested rules
        // like rules inside media queries or keyframes

        if (rule.options.parent instanceof StyleSheet) {
          this.cssRules.splice(index, 0, cssRule);
        }
      }
      /**
       * Delete a rule.
       */
      ;

      _proto.deleteRule = function deleteRule(cssRule) {
        var sheet = this.element.sheet;
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        sheet.deleteRule(index);
        this.cssRules.splice(index, 1);
        return true;
      }
      /**
       * Get index of a CSS Rule.
       */
      ;

      _proto.indexOf = function indexOf(cssRule) {
        return this.cssRules.indexOf(cssRule);
      }
      /**
       * Generate a new CSS rule and replace the existing one.
       */
      ;

      _proto.replaceRule = function replaceRule(cssRule, rule) {
        var index = this.indexOf(cssRule);
        if (index === -1) return false;
        this.element.sheet.deleteRule(index);
        this.cssRules.splice(index, 1);
        return this.insertRule(rule, index);
      }
      /**
       * Get all rules elements.
       */
      ;

      _proto.getRules = function getRules() {
        return this.element.sheet.cssRules;
      };

      return DomRenderer;
    }();

    var instanceCounter = 0;

    var Jss =
    /*#__PURE__*/
    function () {
      function Jss(options) {
        this.id = instanceCounter++;
        this.version = "10.9.0";
        this.plugins = new PluginsRegistry();
        this.options = {
          id: {
            minify: false
          },
          createGenerateId: createGenerateId,
          Renderer: isBrowser ? DomRenderer : null,
          plugins: []
        };
        this.generateId = createGenerateId({
          minify: false
        });

        for (var i = 0; i < plugins$1.length; i++) {
          this.plugins.use(plugins$1[i], {
            queue: 'internal'
          });
        }

        this.setup(options);
      }
      /**
       * Prepares various options, applies plugins.
       * Should not be used twice on the same instance, because there is no plugins
       * deduplication logic.
       */


      var _proto = Jss.prototype;

      _proto.setup = function setup(options) {
        if (options === void 0) {
          options = {};
        }

        if (options.createGenerateId) {
          this.options.createGenerateId = options.createGenerateId;
        }

        if (options.id) {
          this.options.id = _extends({}, this.options.id, options.id);
        }

        if (options.createGenerateId || options.id) {
          this.generateId = this.options.createGenerateId(this.options.id);
        }

        if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

        if ('Renderer' in options) {
          this.options.Renderer = options.Renderer;
        } // eslint-disable-next-line prefer-spread


        if (options.plugins) this.use.apply(this, options.plugins);
        return this;
      }
      /**
       * Create a Style Sheet.
       */
      ;

      _proto.createStyleSheet = function createStyleSheet(styles, options) {
        if (options === void 0) {
          options = {};
        }

        var _options = options,
            index = _options.index;

        if (typeof index !== 'number') {
          index = sheets.index === 0 ? 0 : sheets.index + 1;
        }

        var sheet = new StyleSheet(styles, _extends({}, options, {
          jss: this,
          generateId: options.generateId || this.generateId,
          insertionPoint: this.options.insertionPoint,
          Renderer: this.options.Renderer,
          index: index
        }));
        this.plugins.onProcessSheet(sheet);
        return sheet;
      }
      /**
       * Detach the Style Sheet and remove it from the registry.
       */
      ;

      _proto.removeStyleSheet = function removeStyleSheet(sheet) {
        sheet.detach();
        sheets.remove(sheet);
        return this;
      }
      /**
       * Create a rule without a Style Sheet.
       * [Deprecated] will be removed in the next major version.
       */
      ;

      _proto.createRule = function createRule$1(name, style, options) {
        if (style === void 0) {
          style = {};
        }

        if (options === void 0) {
          options = {};
        }

        // Enable rule without name for inline styles.
        if (typeof name === 'object') {
          return this.createRule(undefined, name, style);
        }

        var ruleOptions = _extends({}, options, {
          name: name,
          jss: this,
          Renderer: this.options.Renderer
        });

        if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
        if (!ruleOptions.classes) ruleOptions.classes = {};
        if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

        var rule = createRule(name, style, ruleOptions);

        if (rule) this.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Register plugin. Passed function will be invoked with a rule instance.
       */
      ;

      _proto.use = function use() {
        var _this = this;

        for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
          plugins[_key] = arguments[_key];
        }

        plugins.forEach(function (plugin) {
          _this.plugins.use(plugin);
        });
        return this;
      };

      return Jss;
    }();

    var createJss = function createJss(options) {
      return new Jss(options);
    };

    /**
    * Export a constant indicating if this browser has CSSTOM support.
    * https://developers.google.com/web/updates/2018/03/cssom
    */
    var hasCSSTOMSupport = typeof CSS === 'object' && CSS != null && 'number' in CSS;

    /**
     * A better abstraction over CSS.
     *
     * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
     * @website https://github.com/cssinjs/jss
     * @license MIT
     */
    var index = createJss();

    var jss = index;

    var now = Date.now();
    var fnValuesNs = "fnValues" + now;
    var fnRuleNs = "fnStyle" + ++now;

    var functionPlugin = function functionPlugin() {
      return {
        onCreateRule: function onCreateRule(name, decl, options) {
          if (typeof decl !== 'function') return null;
          var rule = createRule(name, {}, options);
          rule[fnRuleNs] = decl;
          return rule;
        },
        onProcessStyle: function onProcessStyle(style, rule) {
          // We need to extract function values from the declaration, so that we can keep core unaware of them.
          // We need to do that only once.
          // We don't need to extract functions on each style update, since this can happen only once.
          // We don't support function values inside of function rules.
          if (fnValuesNs in rule || fnRuleNs in rule) return style;
          var fnValues = {};

          for (var prop in style) {
            var value = style[prop];
            if (typeof value !== 'function') continue;
            delete style[prop];
            fnValues[prop] = value;
          }

          rule[fnValuesNs] = fnValues;
          return style;
        },
        onUpdate: function onUpdate(data, rule, sheet, options) {
          var styleRule = rule;
          var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
          // will be returned from that function.

          if (fnRule) {
            // Empty object will remove all currently defined props
            // in case function rule returns a falsy value.
            styleRule.style = fnRule(data) || {};
          }

          var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

          if (fnValues) {
            for (var _prop in fnValues) {
              styleRule.prop(_prop, fnValues[_prop](data), options);
            }
          }
        }
      };
    };

    var functions = functionPlugin;

    function symbolObservablePonyfill(root) {
    	var result;
    	var Symbol = root.Symbol;

    	if (typeof Symbol === 'function') {
    		if (Symbol.observable) {
    			result = Symbol.observable;
    		} else {
    			result = Symbol('observable');
    			Symbol.observable = result;
    		}
    	} else {
    		result = '@@observable';
    	}

    	return result;
    }

    /* global window */

    var root;

    if (typeof self !== 'undefined') {
      root = self;
    } else if (typeof window !== 'undefined') {
      root = window;
    } else if (typeof global !== 'undefined') {
      root = global;
    } else if (typeof module !== 'undefined') {
      root = module;
    } else {
      root = Function('return this')();
    }

    var result = symbolObservablePonyfill(root);

    var isObservable = function isObservable(value) {
      return value && value[result] && value === value[result]();
    };

    var observablePlugin = function observablePlugin(updateOptions) {
      return {
        onCreateRule: function onCreateRule(name, decl, options) {
          if (!isObservable(decl)) return null;
          var style$ = decl;
          var rule = createRule(name, {}, options); // TODO
          // Call `stream.subscribe()` returns a subscription, which should be explicitly
          // unsubscribed from when we know this sheet is no longer needed.

          style$.subscribe(function (style) {
            for (var prop in style) {
              rule.prop(prop, style[prop], updateOptions);
            }
          });
          return rule;
        },
        onProcessRule: function onProcessRule(rule) {
          if (rule && rule.type !== 'style') return;
          var styleRule = rule;
          var style = styleRule.style;

          var _loop = function _loop(prop) {
            var value = style[prop];
            if (!isObservable(value)) return "continue";
            delete style[prop];
            value.subscribe({
              next: function next(nextValue) {
                styleRule.prop(prop, nextValue, updateOptions);
              }
            });
          };

          for (var prop in style) {
            var _ret = _loop(prop);

            if (_ret === "continue") continue;
          }
        }
      };
    };

    var observable = observablePlugin;

    var semiWithNl = /;\n/;
    /**
     * Naive CSS parser.
     * - Supports only rule body (no selectors)
     * - Requires semicolon and new line after the value (except of last line)
     * - No nested rules support
     */

    var parse = function parse(cssText) {
      var style = {};
      var split = cssText.split(semiWithNl);

      for (var i = 0; i < split.length; i++) {
        var decl = (split[i] || '').trim();
        if (!decl) continue;
        var colonIndex = decl.indexOf(':');

        if (colonIndex === -1) {
          continue;
        }

        var prop = decl.substr(0, colonIndex).trim();
        var value = decl.substr(colonIndex + 1).trim();
        style[prop] = value;
      }

      return style;
    };

    var onProcessRule = function onProcessRule(rule) {
      if (typeof rule.style === 'string') {
        rule.style = parse(rule.style);
      }
    };

    function templatePlugin() {
      return {
        onProcessRule: onProcessRule
      };
    }

    var at = '@global';
    var atPrefix = '@global ';

    var GlobalContainerRule =
    /*#__PURE__*/
    function () {
      function GlobalContainerRule(key, styles, options) {
        this.type = 'global';
        this.at = at;
        this.isProcessed = false;
        this.key = key;
        this.options = options;
        this.rules = new RuleList(_extends({}, options, {
          parent: this
        }));

        for (var selector in styles) {
          this.rules.add(selector, styles[selector]);
        }

        this.rules.process();
      }
      /**
       * Get a rule.
       */


      var _proto = GlobalContainerRule.prototype;

      _proto.getRule = function getRule(name) {
        return this.rules.get(name);
      }
      /**
       * Create and register rule, run plugins.
       */
      ;

      _proto.addRule = function addRule(name, style, options) {
        var rule = this.rules.add(name, style, options);
        if (rule) this.options.jss.plugins.onProcessRule(rule);
        return rule;
      }
      /**
       * Replace rule, run plugins.
       */
      ;

      _proto.replaceRule = function replaceRule(name, style, options) {
        var newRule = this.rules.replace(name, style, options);
        if (newRule) this.options.jss.plugins.onProcessRule(newRule);
        return newRule;
      }
      /**
       * Get index of a rule.
       */
      ;

      _proto.indexOf = function indexOf(rule) {
        return this.rules.indexOf(rule);
      }
      /**
       * Generates a CSS string.
       */
      ;

      _proto.toString = function toString(options) {
        return this.rules.toString(options);
      };

      return GlobalContainerRule;
    }();

    var GlobalPrefixedRule =
    /*#__PURE__*/
    function () {
      function GlobalPrefixedRule(key, style, options) {
        this.type = 'global';
        this.at = at;
        this.isProcessed = false;
        this.key = key;
        this.options = options;
        var selector = key.substr(atPrefix.length);
        this.rule = options.jss.createRule(selector, style, _extends({}, options, {
          parent: this
        }));
      }

      var _proto2 = GlobalPrefixedRule.prototype;

      _proto2.toString = function toString(options) {
        return this.rule ? this.rule.toString(options) : '';
      };

      return GlobalPrefixedRule;
    }();

    var separatorRegExp$1 = /\s*,\s*/g;

    function addScope(selector, scope) {
      var parts = selector.split(separatorRegExp$1);
      var scoped = '';

      for (var i = 0; i < parts.length; i++) {
        scoped += scope + " " + parts[i].trim();
        if (parts[i + 1]) scoped += ', ';
      }

      return scoped;
    }

    function handleNestedGlobalContainerRule(rule, sheet) {
      var options = rule.options,
          style = rule.style;
      var rules = style ? style[at] : null;
      if (!rules) return;

      for (var name in rules) {
        sheet.addRule(name, rules[name], _extends({}, options, {
          selector: addScope(name, rule.selector)
        }));
      }

      delete style[at];
    }

    function handlePrefixedGlobalRule(rule, sheet) {
      var options = rule.options,
          style = rule.style;

      for (var prop in style) {
        if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
        var selector = addScope(prop.substr(at.length), rule.selector);
        sheet.addRule(selector, style[prop], _extends({}, options, {
          selector: selector
        }));
        delete style[prop];
      }
    }
    /**
     * Convert nested rules to separate, remove them from original styles.
     */


    function jssGlobal() {
      function onCreateRule(name, styles, options) {
        if (!name) return null;

        if (name === at) {
          return new GlobalContainerRule(name, styles, options);
        }

        if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
          return new GlobalPrefixedRule(name, styles, options);
        }

        var parent = options.parent;

        if (parent) {
          if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
            options.scoped = false;
          }
        }

        if (!options.selector && options.scoped === false) {
          options.selector = name;
        }

        return null;
      }

      function onProcessRule(rule, sheet) {
        if (rule.type !== 'style' || !sheet) return;
        handleNestedGlobalContainerRule(rule, sheet);
        handlePrefixedGlobalRule(rule, sheet);
      }

      return {
        onCreateRule: onCreateRule,
        onProcessRule: onProcessRule
      };
    }

    var isObject = function isObject(obj) {
      return obj && typeof obj === 'object' && !Array.isArray(obj);
    };

    var valueNs = "extendCurrValue" + Date.now();

    function mergeExtend(style, rule, sheet, newStyle) {
      var extendType = typeof style.extend; // Extend using a rule name.

      if (extendType === 'string') {
        if (!sheet) return;
        var refRule = sheet.getRule(style.extend);
        if (!refRule) return;

        if (refRule === rule) {
          return;
        }

        var parent = refRule.options.parent;

        if (parent) {
          var originalStyle = parent.rules.raw[style.extend];
          extend(originalStyle, rule, sheet, newStyle);
        }

        return;
      } // Extend using an array.


      if (Array.isArray(style.extend)) {
        for (var index = 0; index < style.extend.length; index++) {
          var singleExtend = style.extend[index];
          var singleStyle = typeof singleExtend === 'string' ? _extends({}, style, {
            extend: singleExtend
          }) : style.extend[index];
          extend(singleStyle, rule, sheet, newStyle);
        }

        return;
      } // Extend is a style object.


      for (var prop in style.extend) {
        if (prop === 'extend') {
          extend(style.extend.extend, rule, sheet, newStyle);
          continue;
        }

        if (isObject(style.extend[prop])) {
          if (!(prop in newStyle)) newStyle[prop] = {};
          extend(style.extend[prop], rule, sheet, newStyle[prop]);
          continue;
        }

        newStyle[prop] = style.extend[prop];
      }
    }

    function mergeRest(style, rule, sheet, newStyle) {
      // Copy base style.
      for (var prop in style) {
        if (prop === 'extend') continue;

        if (isObject(newStyle[prop]) && isObject(style[prop])) {
          extend(style[prop], rule, sheet, newStyle[prop]);
          continue;
        }

        if (isObject(style[prop])) {
          newStyle[prop] = extend(style[prop], rule, sheet);
          continue;
        }

        newStyle[prop] = style[prop];
      }
    }
    /**
     * Recursively extend styles.
     */


    function extend(style, rule, sheet, newStyle) {
      if (newStyle === void 0) {
        newStyle = {};
      }

      mergeExtend(style, rule, sheet, newStyle);
      mergeRest(style, rule, sheet, newStyle);
      return newStyle;
    }
    /**
     * Handle `extend` property.
     */


    function jssExtend() {
      function onProcessStyle(style, rule, sheet) {
        if ('extend' in style) return extend(style, rule, sheet);
        return style;
      }

      function onChangeValue(value, prop, rule) {
        if (prop !== 'extend') return value; // Value is empty, remove properties set previously.

        if (value == null || value === false) {
          for (var key in rule[valueNs]) {
            rule.prop(key, null);
          }

          rule[valueNs] = null;
          return null;
        }

        if (typeof value === 'object') {
          for (var _key in value) {
            rule.prop(_key, value[_key]);
          }

          rule[valueNs] = value;
        } // Make sure we don't set the value in the core.


        return null;
      }

      return {
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    var separatorRegExp = /\s*,\s*/g;
    var parentRegExp = /&/g;
    var refRegExp = /\$([\w-]+)/g;
    /**
     * Convert nested rules to separate, remove them from original styles.
     */

    function jssNested() {
      // Get a function to be used for $ref replacement.
      function getReplaceRef(container, sheet) {
        return function (match, key) {
          var rule = container.getRule(key) || sheet && sheet.getRule(key);

          if (rule) {
            return rule.selector;
          }
          return key;
        };
      }

      function replaceParentRefs(nestedProp, parentProp) {
        var parentSelectors = parentProp.split(separatorRegExp);
        var nestedSelectors = nestedProp.split(separatorRegExp);
        var result = '';

        for (var i = 0; i < parentSelectors.length; i++) {
          var parent = parentSelectors[i];

          for (var j = 0; j < nestedSelectors.length; j++) {
            var nested = nestedSelectors[j];
            if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

            result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
          }
        }

        return result;
      }

      function getOptions(rule, container, prevOptions) {
        // Options has been already created, now we only increase index.
        if (prevOptions) return _extends({}, prevOptions, {
          index: prevOptions.index + 1
        });
        var nestingLevel = rule.options.nestingLevel;
        nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

        var options = _extends({}, rule.options, {
          nestingLevel: nestingLevel,
          index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

        });

        delete options.name;
        return options;
      }

      function onProcessStyle(style, rule, sheet) {
        if (rule.type !== 'style') return style;
        var styleRule = rule;
        var container = styleRule.options.parent;
        var options;
        var replaceRef;

        for (var prop in style) {
          var isNested = prop.indexOf('&') !== -1;
          var isNestedConditional = prop[0] === '@';
          if (!isNested && !isNestedConditional) continue;
          options = getOptions(styleRule, container, options);

          if (isNested) {
            var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
            // all nested rules within the sheet.

            if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

            selector = selector.replace(refRegExp, replaceRef);
            var name = styleRule.key + "-" + prop;

            if ('replaceRule' in container) {
              // for backward compatibility
              container.replaceRule(name, style[prop], _extends({}, options, {
                selector: selector
              }));
            } else {
              container.addRule(name, style[prop], _extends({}, options, {
                selector: selector
              }));
            }
          } else if (isNestedConditional) {
            // Place conditional right after the parent rule to ensure right ordering.
            container.addRule(prop, {}, options).addRule(styleRule.key, style[prop], {
              selector: styleRule.selector
            });
          }

          delete style[prop];
        }

        return style;
      }

      return {
        onProcessStyle: onProcessStyle
      };
    }

    /**
     * Set selector.
     *
     * @param original rule
     * @param className class string
     * @return flag indicating function was successfull or not
     */

    function registerClass(rule, className) {
      // Skip falsy values
      if (!className) return true; // Support array of class names `{composes: ['foo', 'bar']}`

      if (Array.isArray(className)) {
        for (var index = 0; index < className.length; index++) {
          var isSetted = registerClass(rule, className[index]);
          if (!isSetted) return false;
        }

        return true;
      } // Support space separated class names `{composes: 'foo bar'}`


      if (className.indexOf(' ') > -1) {
        return registerClass(rule, className.split(' '));
      }

      var parent = rule.options.parent; // It is a ref to a local rule.

      if (className[0] === '$') {
        var refRule = parent.getRule(className.substr(1));

        if (!refRule) {
          return false;
        }

        if (refRule === rule) {
          return false;
        }

        parent.classes[rule.key] += " " + parent.classes[refRule.key];
        return true;
      }

      parent.classes[rule.key] += " " + className;
      return true;
    }
    /**
     * Convert compose property to additional class, remove property from original styles.
     */


    function jssCompose() {
      function onProcessStyle(style, rule) {
        if (!('composes' in style)) return style;
        registerClass(rule, style.composes); // Remove composes property to prevent infinite loop.

        delete style.composes;
        return style;
      }

      return {
        onProcessStyle: onProcessStyle
      };
    }

    /* eslint-disable no-var, prefer-template */
    var uppercasePattern = /[A-Z]/g;
    var msPattern = /^ms-/;
    var cache$2 = {};

    function toHyphenLower(match) {
      return '-' + match.toLowerCase()
    }

    function hyphenateStyleName(name) {
      if (cache$2.hasOwnProperty(name)) {
        return cache$2[name]
      }

      var hName = name.replace(uppercasePattern, toHyphenLower);
      return (cache$2[name] = msPattern.test(hName) ? '-' + hName : hName)
    }

    /**
     * Convert camel cased property names to dash separated.
     */

    function convertCase(style) {
      var converted = {};

      for (var prop in style) {
        var key = prop.indexOf('--') === 0 ? prop : hyphenateStyleName(prop);
        converted[key] = style[prop];
      }

      if (style.fallbacks) {
        if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
      }

      return converted;
    }
    /**
     * Allow camel cased property names by converting them back to dasherized.
     */


    function camelCase() {
      function onProcessStyle(style) {
        if (Array.isArray(style)) {
          // Handle rules like @font-face, which can have multiple styles in an array
          for (var index = 0; index < style.length; index++) {
            style[index] = convertCase(style[index]);
          }

          return style;
        }

        return convertCase(style);
      }

      function onChangeValue(value, prop, rule) {
        if (prop.indexOf('--') === 0) {
          return value;
        }

        var hyphenatedProp = hyphenateStyleName(prop); // There was no camel case in place

        if (prop === hyphenatedProp) return value;
        rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

        return null;
      }

      return {
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    var px = hasCSSTOMSupport && CSS ? CSS.px : 'px';
    var ms = hasCSSTOMSupport && CSS ? CSS.ms : 'ms';
    var percent = hasCSSTOMSupport && CSS ? CSS.percent : '%';
    /**
     * Generated jss-plugin-default-unit CSS property units
     */

    var defaultUnits = {
      // Animation properties
      'animation-delay': ms,
      'animation-duration': ms,
      // Background properties
      'background-position': px,
      'background-position-x': px,
      'background-position-y': px,
      'background-size': px,
      // Border Properties
      border: px,
      'border-bottom': px,
      'border-bottom-left-radius': px,
      'border-bottom-right-radius': px,
      'border-bottom-width': px,
      'border-left': px,
      'border-left-width': px,
      'border-radius': px,
      'border-right': px,
      'border-right-width': px,
      'border-top': px,
      'border-top-left-radius': px,
      'border-top-right-radius': px,
      'border-top-width': px,
      'border-width': px,
      'border-block': px,
      'border-block-end': px,
      'border-block-end-width': px,
      'border-block-start': px,
      'border-block-start-width': px,
      'border-block-width': px,
      'border-inline': px,
      'border-inline-end': px,
      'border-inline-end-width': px,
      'border-inline-start': px,
      'border-inline-start-width': px,
      'border-inline-width': px,
      'border-start-start-radius': px,
      'border-start-end-radius': px,
      'border-end-start-radius': px,
      'border-end-end-radius': px,
      // Margin properties
      margin: px,
      'margin-bottom': px,
      'margin-left': px,
      'margin-right': px,
      'margin-top': px,
      'margin-block': px,
      'margin-block-end': px,
      'margin-block-start': px,
      'margin-inline': px,
      'margin-inline-end': px,
      'margin-inline-start': px,
      // Padding properties
      padding: px,
      'padding-bottom': px,
      'padding-left': px,
      'padding-right': px,
      'padding-top': px,
      'padding-block': px,
      'padding-block-end': px,
      'padding-block-start': px,
      'padding-inline': px,
      'padding-inline-end': px,
      'padding-inline-start': px,
      // Mask properties
      'mask-position-x': px,
      'mask-position-y': px,
      'mask-size': px,
      // Width and height properties
      height: px,
      width: px,
      'min-height': px,
      'max-height': px,
      'min-width': px,
      'max-width': px,
      // Position properties
      bottom: px,
      left: px,
      top: px,
      right: px,
      inset: px,
      'inset-block': px,
      'inset-block-end': px,
      'inset-block-start': px,
      'inset-inline': px,
      'inset-inline-end': px,
      'inset-inline-start': px,
      // Shadow properties
      'box-shadow': px,
      'text-shadow': px,
      // Column properties
      'column-gap': px,
      'column-rule': px,
      'column-rule-width': px,
      'column-width': px,
      // Font and text properties
      'font-size': px,
      'font-size-delta': px,
      'letter-spacing': px,
      'text-decoration-thickness': px,
      'text-indent': px,
      'text-stroke': px,
      'text-stroke-width': px,
      'word-spacing': px,
      // Motion properties
      motion: px,
      'motion-offset': px,
      // Outline properties
      outline: px,
      'outline-offset': px,
      'outline-width': px,
      // Perspective properties
      perspective: px,
      'perspective-origin-x': percent,
      'perspective-origin-y': percent,
      // Transform properties
      'transform-origin': percent,
      'transform-origin-x': percent,
      'transform-origin-y': percent,
      'transform-origin-z': percent,
      // Transition properties
      'transition-delay': ms,
      'transition-duration': ms,
      // Alignment properties
      'vertical-align': px,
      'flex-basis': px,
      // Some random properties
      'shape-margin': px,
      size: px,
      gap: px,
      // Grid properties
      grid: px,
      'grid-gap': px,
      'row-gap': px,
      'grid-row-gap': px,
      'grid-column-gap': px,
      'grid-template-rows': px,
      'grid-template-columns': px,
      'grid-auto-rows': px,
      'grid-auto-columns': px,
      // Not existing properties.
      // Used to avoid issues with jss-plugin-expand integration.
      'box-shadow-x': px,
      'box-shadow-y': px,
      'box-shadow-blur': px,
      'box-shadow-spread': px,
      'font-line-height': px,
      'text-shadow-x': px,
      'text-shadow-y': px,
      'text-shadow-blur': px
    };

    /**
     * Clones the object and adds a camel cased property version.
     */

    function addCamelCasedVersion(obj) {
      var regExp = /(-[a-z])/g;

      var replace = function replace(str) {
        return str[1].toUpperCase();
      };

      var newObj = {};

      for (var key in obj) {
        newObj[key] = obj[key];
        newObj[key.replace(regExp, replace)] = obj[key];
      }

      return newObj;
    }

    var units = addCamelCasedVersion(defaultUnits);
    /**
     * Recursive deep style passing function
     */

    function iterate(prop, value, options) {
      if (value == null) return value;

      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; i++) {
          value[i] = iterate(prop, value[i], options);
        }
      } else if (typeof value === 'object') {
        if (prop === 'fallbacks') {
          for (var innerProp in value) {
            value[innerProp] = iterate(innerProp, value[innerProp], options);
          }
        } else {
          for (var _innerProp in value) {
            value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
          }
        } // eslint-disable-next-line no-restricted-globals

      } else if (typeof value === 'number' && isNaN(value) === false) {
        var unit = options[prop] || units[prop]; // Add the unit if available, except for the special case of 0px.

        if (unit && !(value === 0 && unit === px)) {
          return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
        }

        return value.toString();
      }

      return value;
    }
    /**
     * Add unit to numeric values.
     */


    function defaultUnit(options) {
      if (options === void 0) {
        options = {};
      }

      var camelCasedOptions = addCamelCasedVersion(options);

      function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;

        for (var prop in style) {
          style[prop] = iterate(prop, style[prop], camelCasedOptions);
        }

        return style;
      }

      function onChangeValue(value, prop) {
        return iterate(prop, value, camelCasedOptions);
      }

      return {
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    /**
     * A scheme for converting properties from array to regular style.
     * All properties listed below will be transformed to a string separated by space.
     */
    var propArray = {
      'background-size': true,
      'background-position': true,
      border: true,
      'border-bottom': true,
      'border-left': true,
      'border-top': true,
      'border-right': true,
      'border-radius': true,
      'border-image': true,
      'border-width': true,
      'border-style': true,
      'border-color': true,
      'box-shadow': true,
      flex: true,
      margin: true,
      padding: true,
      outline: true,
      'transform-origin': true,
      transform: true,
      transition: true
      /**
       * A scheme for converting arrays to regular styles inside of objects.
       * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
       */

    };
    var propArrayInObj = {
      position: true,
      // background-position
      size: true // background-size

      /**
       * A scheme for parsing and building correct styles from passed objects.
       */

    };
    var propObj = {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
      background: {
        attachment: null,
        color: null,
        image: null,
        position: null,
        repeat: null
      },
      border: {
        width: null,
        style: null,
        color: null
      },
      'border-top': {
        width: null,
        style: null,
        color: null
      },
      'border-right': {
        width: null,
        style: null,
        color: null
      },
      'border-bottom': {
        width: null,
        style: null,
        color: null
      },
      'border-left': {
        width: null,
        style: null,
        color: null
      },
      outline: {
        width: null,
        style: null,
        color: null
      },
      'list-style': {
        type: null,
        position: null,
        image: null
      },
      transition: {
        property: null,
        duration: null,
        'timing-function': null,
        timingFunction: null,
        // Needed for avoiding comilation issues with jss-plugin-camel-case
        delay: null
      },
      animation: {
        name: null,
        duration: null,
        'timing-function': null,
        timingFunction: null,
        // Needed to avoid compilation issues with jss-plugin-camel-case
        delay: null,
        'iteration-count': null,
        iterationCount: null,
        // Needed to avoid compilation issues with jss-plugin-camel-case
        direction: null,
        'fill-mode': null,
        fillMode: null,
        // Needed to avoid compilation issues with jss-plugin-camel-case
        'play-state': null,
        playState: null // Needed to avoid compilation issues with jss-plugin-camel-case

      },
      'box-shadow': {
        x: 0,
        y: 0,
        blur: 0,
        spread: 0,
        color: null,
        inset: null
      },
      'text-shadow': {
        x: 0,
        y: 0,
        blur: null,
        color: null
      }
      /**
       * A scheme for converting non-standart properties inside object.
       * For e.g.: include 'border-radius' property inside 'border' object.
       */

    };
    var customPropObj = {
      border: {
        radius: 'border-radius',
        image: 'border-image',
        width: 'border-width',
        style: 'border-style',
        color: 'border-color'
      },
      'border-bottom': {
        width: 'border-bottom-width',
        style: 'border-bottom-style',
        color: 'border-bottom-color'
      },
      'border-top': {
        width: 'border-top-width',
        style: 'border-top-style',
        color: 'border-top-color'
      },
      'border-left': {
        width: 'border-left-width',
        style: 'border-left-style',
        color: 'border-left-color'
      },
      'border-right': {
        width: 'border-right-width',
        style: 'border-right-style',
        color: 'border-right-color'
      },
      background: {
        size: 'background-size',
        image: 'background-image'
      },
      font: {
        style: 'font-style',
        variant: 'font-variant',
        weight: 'font-weight',
        stretch: 'font-stretch',
        size: 'font-size',
        family: 'font-family',
        lineHeight: 'line-height',
        // Needed to avoid compilation issues with jss-plugin-camel-case
        'line-height': 'line-height'
      },
      flex: {
        grow: 'flex-grow',
        basis: 'flex-basis',
        direction: 'flex-direction',
        wrap: 'flex-wrap',
        flow: 'flex-flow',
        shrink: 'flex-shrink'
      },
      align: {
        self: 'align-self',
        items: 'align-items',
        content: 'align-content'
      },
      grid: {
        'template-columns': 'grid-template-columns',
        templateColumns: 'grid-template-columns',
        'template-rows': 'grid-template-rows',
        templateRows: 'grid-template-rows',
        'template-areas': 'grid-template-areas',
        templateAreas: 'grid-template-areas',
        template: 'grid-template',
        'auto-columns': 'grid-auto-columns',
        autoColumns: 'grid-auto-columns',
        'auto-rows': 'grid-auto-rows',
        autoRows: 'grid-auto-rows',
        'auto-flow': 'grid-auto-flow',
        autoFlow: 'grid-auto-flow',
        row: 'grid-row',
        column: 'grid-column',
        'row-start': 'grid-row-start',
        rowStart: 'grid-row-start',
        'row-end': 'grid-row-end',
        rowEnd: 'grid-row-end',
        'column-start': 'grid-column-start',
        columnStart: 'grid-column-start',
        'column-end': 'grid-column-end',
        columnEnd: 'grid-column-end',
        area: 'grid-area',
        gap: 'grid-gap',
        'row-gap': 'grid-row-gap',
        rowGap: 'grid-row-gap',
        'column-gap': 'grid-column-gap',
        columnGap: 'grid-column-gap'
      }
    };

    /* eslint-disable no-use-before-define */
    /**
     * Map values by given prop.
     *
     * @param {Array} array of values
     * @param {String} original property
     * @param {String} original rule
     * @return {String} mapped values
     */

    function mapValuesByProp(value, prop, rule) {
      return value.map(function (item) {
        return objectToArray(item, prop, rule, false, true);
      });
    }
    /**
     * Convert array to nested array, if needed
     */


    function processArray(value, prop, scheme, rule) {
      if (scheme[prop] == null) return value;
      if (value.length === 0) return [];
      if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);

      if (typeof value[0] === 'object') {
        return mapValuesByProp(value, prop, rule);
      }

      return [value];
    }
    /**
     * Convert object to array.
     */


    function objectToArray(value, prop, rule, isFallback, isInArray) {
      if (!(propObj[prop] || customPropObj[prop])) return [];
      var result = []; // Check if exists any non-standard property

      if (customPropObj[prop]) {
        // eslint-disable-next-line no-param-reassign
        value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
      } // Pass throught all standart props


      if (Object.keys(value).length) {
        for (var baseProp in propObj[prop]) {
          if (value[baseProp]) {
            if (Array.isArray(value[baseProp])) {
              result.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(' '));
            } else result.push(value[baseProp]);

            continue;
          } // Add default value from props config.


          if (propObj[prop][baseProp] != null) {
            result.push(propObj[prop][baseProp]);
          }
        }
      }

      if (!result.length || isInArray) return result;
      return [result];
    }
    /**
     * Convert custom properties values to styles adding them to rule directly
     */


    function customPropsToStyle(value, rule, customProps, isFallback) {
      for (var prop in customProps) {
        var propName = customProps[prop]; // If current property doesn't exist already in rule - add new one

        if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
          var _styleDetector;

          var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName]; // Add style directly in rule

          if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
        } // Delete converted property to avoid double converting


        delete value[prop];
      }

      return value;
    }
    /**
     * Detect if a style needs to be converted.
     */


    function styleDetector(style, rule, isFallback) {
      for (var prop in style) {
        var value = style[prop];

        if (Array.isArray(value)) {
          // Check double arrays to avoid recursion.
          if (!Array.isArray(value[0])) {
            if (prop === 'fallbacks') {
              for (var index = 0; index < style.fallbacks.length; index++) {
                style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
              }

              continue;
            }

            style[prop] = processArray(value, prop, propArray, rule); // Avoid creating properties with empty values

            if (!style[prop].length) delete style[prop];
          }
        } else if (typeof value === 'object') {
          if (prop === 'fallbacks') {
            style.fallbacks = styleDetector(style.fallbacks, rule, true);
            continue;
          }

          style[prop] = objectToArray(value, prop, rule, isFallback); // Avoid creating properties with empty values

          if (!style[prop].length) delete style[prop];
        } // Maybe a computed value resulting in an empty string
        else if (style[prop] === '') delete style[prop];
      }

      return style;
    }
    /**
     * Adds possibility to write expanded styles.
     */


    function jssExpand() {
      function onProcessStyle(style, rule) {
        if (!style || rule.type !== 'style') return style;

        if (Array.isArray(style)) {
          // Pass rules one by one and reformat them
          for (var index = 0; index < style.length; index++) {
            style[index] = styleDetector(style[index], rule);
          }

          return style;
        }

        return styleDetector(style, rule);
      }

      return {
        onProcessStyle: onProcessStyle
      };
    }

    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;

      for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) return _arrayLikeToArray(arr);
    }

    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }

    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;
      if (typeof o === "string") return _arrayLikeToArray(o, minLen);
      var n = Object.prototype.toString.call(o).slice(8, -1);
      if (n === "Object" && o.constructor) n = o.constructor.name;
      if (n === "Map" || n === "Set") return Array.from(o);
      if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }

    // Export javascript style and css style vendor prefixes.
    var js = '';
    var css = '';
    var vendor = '';
    var browser = '';
    var isTouch = isBrowser && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

    if (isBrowser) {
      // Order matters. We need to check Webkit the last one because
      // other vendors use to add Webkit prefixes to some properties
      var jsCssMap = {
        Moz: '-moz-',
        ms: '-ms-',
        O: '-o-',
        Webkit: '-webkit-'
      };

      var _document$createEleme = document.createElement('p'),
          style = _document$createEleme.style;

      var testProp = 'Transform';

      for (var key in jsCssMap) {
        if (key + testProp in style) {
          js = key;
          css = jsCssMap[key];
          break;
        }
      } // Correctly detect the Edge browser.


      if (js === 'Webkit' && 'msHyphens' in style) {
        js = 'ms';
        css = jsCssMap.ms;
        browser = 'edge';
      } // Correctly detect the Safari browser.


      if (js === 'Webkit' && '-apple-trailing-word' in style) {
        vendor = 'apple';
      }
    }
    /**
     * Vendor prefix string for the current browser.
     *
     * @type {{js: String, css: String, vendor: String, browser: String}}
     * @api public
     */


    var prefix = {
      js: js,
      css: css,
      vendor: vendor,
      browser: browser,
      isTouch: isTouch
    };

    /**
     * Test if a keyframe at-rule should be prefixed or not
     *
     * @param {String} vendor prefix string for the current browser.
     * @return {String}
     * @api public
     */

    function supportedKeyframes(key) {
      // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
      if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
      // https://caniuse.com/#search=keyframes

      if (prefix.js === 'ms') return key;
      return "@" + prefix.css + "keyframes" + key.substr(10);
    }

    // https://caniuse.com/#search=appearance

    var appearence = {
      noPrefill: ['appearance'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'appearance') return false;
        if (prefix.js === 'ms') return "-webkit-" + prop;
        return prefix.css + prop;
      }
    };

    // https://caniuse.com/#search=color-adjust

    var colorAdjust = {
      noPrefill: ['color-adjust'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'color-adjust') return false;
        if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
        return prop;
      }
    };

    var regExp = /[-\s]+(.)?/g;
    /**
     * Replaces the letter with the capital letter
     *
     * @param {String} match
     * @param {String} c
     * @return {String}
     * @api private
     */

    function toUpper(match, c) {
      return c ? c.toUpperCase() : '';
    }
    /**
     * Convert dash separated strings to camel-cased.
     *
     * @param {String} str
     * @return {String}
     * @api private
     */


    function camelize(str) {
      return str.replace(regExp, toUpper);
    }

    /**
     * Convert dash separated strings to pascal cased.
     *
     * @param {String} str
     * @return {String}
     * @api private
     */

    function pascalize(str) {
      return camelize("-" + str);
    }

    // but we can use a longhand property instead.
    // https://caniuse.com/#search=mask

    var mask = {
      noPrefill: ['mask'],
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^mask/.test(prop)) return false;

        if (prefix.js === 'Webkit') {
          var longhand = 'mask-image';

          if (camelize(longhand) in style) {
            return prop;
          }

          if (prefix.js + pascalize(longhand) in style) {
            return prefix.css + prop;
          }
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=text-orientation

    var textOrientation = {
      noPrefill: ['text-orientation'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'text-orientation') return false;

        if (prefix.vendor === 'apple' && !prefix.isTouch) {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=transform

    var transform = {
      noPrefill: ['transform'],
      supportedProperty: function supportedProperty(prop, style, options) {
        if (prop !== 'transform') return false;

        if (options.transform) {
          return prop;
        }

        return prefix.css + prop;
      }
    };

    // https://caniuse.com/#search=transition

    var transition = {
      noPrefill: ['transition'],
      supportedProperty: function supportedProperty(prop, style, options) {
        if (prop !== 'transition') return false;

        if (options.transition) {
          return prop;
        }

        return prefix.css + prop;
      }
    };

    // https://caniuse.com/#search=writing-mode

    var writingMode = {
      noPrefill: ['writing-mode'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'writing-mode') return false;

        if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=user-select

    var userSelect = {
      noPrefill: ['user-select'],
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'user-select') return false;

        if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
          return prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=multicolumn
    // https://github.com/postcss/autoprefixer/issues/491
    // https://github.com/postcss/autoprefixer/issues/177

    var breakPropsOld = {
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^break-/.test(prop)) return false;

        if (prefix.js === 'Webkit') {
          var jsProp = "WebkitColumn" + pascalize(prop);
          return jsProp in style ? prefix.css + "column-" + prop : false;
        }

        if (prefix.js === 'Moz') {
          var _jsProp = "page" + pascalize(prop);

          return _jsProp in style ? "page-" + prop : false;
        }

        return false;
      }
    };

    // See https://github.com/postcss/autoprefixer/issues/324.

    var inlineLogicalOld = {
      supportedProperty: function supportedProperty(prop, style) {
        if (!/^(border|margin|padding)-inline/.test(prop)) return false;
        if (prefix.js === 'Moz') return prop;
        var newProp = prop.replace('-inline', '');
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
    };

    // Camelization is required because we can't test using.
    // CSS syntax for e.g. in FF.

    var unprefixed = {
      supportedProperty: function supportedProperty(prop, style) {
        return camelize(prop) in style ? prop : false;
      }
    };

    var prefixed = {
      supportedProperty: function supportedProperty(prop, style) {
        var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

        if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

        if (prop[0] === '-' && prop[1] === '-') return prop;
        if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

        if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
        return false;
      }
    };

    // https://caniuse.com/#search=scroll-snap

    var scrollSnap = {
      supportedProperty: function supportedProperty(prop) {
        if (prop.substring(0, 11) !== 'scroll-snap') return false;

        if (prefix.js === 'ms') {
          return "" + prefix.css + prop;
        }

        return prop;
      }
    };

    // https://caniuse.com/#search=overscroll-behavior

    var overscrollBehavior = {
      supportedProperty: function supportedProperty(prop) {
        if (prop !== 'overscroll-behavior') return false;

        if (prefix.js === 'ms') {
          return prefix.css + "scroll-chaining";
        }

        return prop;
      }
    };

    var propMap = {
      'flex-grow': 'flex-positive',
      'flex-shrink': 'flex-negative',
      'flex-basis': 'flex-preferred-size',
      'justify-content': 'flex-pack',
      order: 'flex-order',
      'align-items': 'flex-align',
      'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

    }; // Support old flex spec from 2012.

    var flex2012 = {
      supportedProperty: function supportedProperty(prop, style) {
        var newProp = propMap[prop];
        if (!newProp) return false;
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }
    };

    var propMap$1 = {
      flex: 'box-flex',
      'flex-grow': 'box-flex',
      'flex-direction': ['box-orient', 'box-direction'],
      order: 'box-ordinal-group',
      'align-items': 'box-align',
      'flex-flow': ['box-orient', 'box-direction'],
      'justify-content': 'box-pack'
    };
    var propKeys = Object.keys(propMap$1);

    var prefixCss = function prefixCss(p) {
      return prefix.css + p;
    }; // Support old flex spec from 2009.


    var flex2009 = {
      supportedProperty: function supportedProperty(prop, style, _ref) {
        var multiple = _ref.multiple;

        if (propKeys.indexOf(prop) > -1) {
          var newProp = propMap$1[prop];

          if (!Array.isArray(newProp)) {
            return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
          }

          if (!multiple) return false;

          for (var i = 0; i < newProp.length; i++) {
            if (!(prefix.js + pascalize(newProp[0]) in style)) {
              return false;
            }
          }

          return newProp.map(prefixCss);
        }

        return false;
      }
    };

    // plugins = [
    //   ...plugins,
    //    breakPropsOld,
    //    inlineLogicalOld,
    //    unprefixed,
    //    prefixed,
    //    scrollSnap,
    //    flex2012,
    //    flex2009
    // ]
    // Plugins without 'noPrefill' value, going last.
    // 'flex-*' plugins should be at the bottom.
    // 'flex2009' going after 'flex2012'.
    // 'prefixed' going after 'unprefixed'

    var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
    var propertyDetectors = plugins.filter(function (p) {
      return p.supportedProperty;
    }).map(function (p) {
      return p.supportedProperty;
    });
    var noPrefill = plugins.filter(function (p) {
      return p.noPrefill;
    }).reduce(function (a, p) {
      a.push.apply(a, _toConsumableArray(p.noPrefill));
      return a;
    }, []);

    var el;
    var cache = {};

    if (isBrowser) {
      el = document.createElement('p'); // We test every property on vendor prefix requirement.
      // Once tested, result is cached. It gives us up to 70% perf boost.
      // http://jsperf.com/element-style-object-access-vs-plain-object
      //
      // Prefill cache with known css properties to reduce amount of
      // properties we need to feature test at runtime.
      // http://davidwalsh.name/vendor-prefix

      var computed = window.getComputedStyle(document.documentElement, '');

      for (var key$1 in computed) {
        // eslint-disable-next-line no-restricted-globals
        if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
      } // Properties that cannot be correctly detected using the
      // cache prefill method.


      noPrefill.forEach(function (x) {
        return delete cache[x];
      });
    }
    /**
     * Test if a property is supported, returns supported property with vendor
     * prefix if required. Returns `false` if not supported.
     *
     * @param {String} prop dash separated
     * @param {Object} [options]
     * @return {String|Boolean}
     * @api public
     */


    function supportedProperty(prop, options) {
      if (options === void 0) {
        options = {};
      }

      // For server-side rendering.
      if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

      if (cache[prop] != null) {
        return cache[prop];
      } // Check if 'transition' or 'transform' natively supported in browser.


      if (prop === 'transition' || prop === 'transform') {
        options[prop] = prop in el.style;
      } // Find a plugin for current prefix property.


      for (var i = 0; i < propertyDetectors.length; i++) {
        cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

        if (cache[prop]) break;
      } // Reset styles for current property.
      // Firefox can even throw an error for invalid properties, e.g., "0".


      try {
        el.style[prop] = '';
      } catch (err) {
        return false;
      }

      return cache[prop];
    }

    var cache$1 = {};
    var transitionProperties = {
      transition: 1,
      'transition-property': 1,
      '-webkit-transition': 1,
      '-webkit-transition-property': 1
    };
    var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
    var el$1;
    /**
     * Returns prefixed value transition/transform if needed.
     *
     * @param {String} match
     * @param {String} p1
     * @param {String} p2
     * @return {String}
     * @api private
     */

    function prefixTransitionCallback(match, p1, p2) {
      if (p1 === 'var') return 'var';
      if (p1 === 'all') return 'all';
      if (p2 === 'all') return ', all';
      var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
      if (!prefixedValue) return p1 || p2;
      return prefixedValue;
    }

    if (isBrowser) el$1 = document.createElement('p');
    /**
     * Returns prefixed value if needed. Returns `false` if value is not supported.
     *
     * @param {String} property
     * @param {String} value
     * @return {String|Boolean}
     * @api public
     */

    function supportedValue(property, value) {
      // For server-side rendering.
      var prefixedValue = value;
      if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
      // We want only prefixable values here.
      // eslint-disable-next-line no-restricted-globals

      if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
        return prefixedValue;
      } // Create cache key for current value.


      var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

      if (cache$1[cacheKey] != null) {
        return cache$1[cacheKey];
      } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


      try {
        // Test value as it is.
        el$1.style[property] = prefixedValue;
      } catch (err) {
        // Return false if value not supported.
        cache$1[cacheKey] = false;
        return false;
      } // If 'transition' or 'transition-property' property.


      if (transitionProperties[property]) {
        prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
      } else if (el$1.style[property] === '') {
        // Value with a vendor prefix.
        prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

        if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

        el$1.style[property] = prefixedValue; // Return false if value not supported.

        if (el$1.style[property] === '') {
          cache$1[cacheKey] = false;
          return false;
        }
      } // Reset styles for current property.


      el$1.style[property] = ''; // Write current value to cache.

      cache$1[cacheKey] = prefixedValue;
      return cache$1[cacheKey];
    }

    /**
     * Add vendor prefix to a property name when needed.
     */

    function jssVendorPrefixer() {
      function onProcessRule(rule) {
        if (rule.type === 'keyframes') {
          var atRule = rule;
          atRule.at = supportedKeyframes(atRule.at);
        }
      }

      function prefixStyle(style) {
        for (var prop in style) {
          var value = style[prop];

          if (prop === 'fallbacks' && Array.isArray(value)) {
            style[prop] = value.map(prefixStyle);
            continue;
          }

          var changeProp = false;
          var supportedProp = supportedProperty(prop);
          if (supportedProp && supportedProp !== prop) changeProp = true;
          var changeValue = false;
          var supportedValue$1 = supportedValue(supportedProp, toCssValue(value));
          if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

          if (changeProp || changeValue) {
            if (changeProp) delete style[prop];
            style[supportedProp || prop] = supportedValue$1 || value;
          }
        }

        return style;
      }

      function onProcessStyle(style, rule) {
        if (rule.type !== 'style') return style;
        return prefixStyle(style);
      }

      function onChangeValue(value, prop) {
        return supportedValue(prop, toCssValue(value)) || value;
      }

      return {
        onProcessRule: onProcessRule,
        onProcessStyle: onProcessStyle,
        onChangeValue: onChangeValue
      };
    }

    /**
     * Sort props by length.
     */
    function jssPropsSort() {
      var sort = function sort(prop0, prop1) {
        if (prop0.length === prop1.length) {
          return prop0 > prop1 ? 1 : -1;
        }

        return prop0.length - prop1.length;
      };

      return {
        onProcessStyle: function onProcessStyle(style, rule) {
          if (rule.type !== 'style') return style;
          var newStyle = {};
          var props = Object.keys(style).sort(sort);

          for (var i = 0; i < props.length; i++) {
            newStyle[props[i]] = style[props[i]];
          }

          return newStyle;
        }
      };
    }

    var create = function create(options) {
      if (options === void 0) {
        options = {};
      }

      return {
        plugins: [functions(), observable(options.observable), templatePlugin(), jssGlobal(), jssExtend(), jssNested(), jssCompose(), camelCase(), defaultUnit(options.defaultUnit), jssExpand(), jssVendorPrefixer(), jssPropsSort()]
      };
    };

    var preset = create;

    jss.setup(preset());
    function chartStyles (target, options) {
        const palette = getPalette(options.palette);
        const sheet = jss.createStyleSheet({
            '@global': {
                [`#nhsd-viz-${options.visualisationId}`]: {
                    position: 'relative',
                    background: palette.background,
                    fontSize: `${options.fontSize || "16px"}`,
                    textAlign: 'center',
                    ['& .nhsd-viz-sr-only']: {
                        position: 'absolute!important',
                        width: '1px!important',
                        height: '1px!important',
                        padding: '0!important',
                        margin: '-1px!important',
                        overflow: 'hidden!important',
                        clip: 'rect(0,0,0,0)!important',
                        whiteSpace: 'nowrap!important',
                        border: '0!important',
                    },
                    ['& .nhsd-viz-content']: {
                        padding: defaultConf.padding,
                    },
                    ['& .nhsd-viz-fill-primary']: {
                        fill: palette.primary,
                    },
                    ['& .nhsd-viz-fill-secondary']: {
                        fill: palette.secondary,
                    },
                    ['& .nhsd-viz-title']: {
                        fontSize: '2.6em',
                        margin: 0,
                        marginBottom: '0.2em',
                        color: palette.text,
                        textAlign: 'center',
                        textTransform: 'uppercase',
                        textDecoration: 'underline',
                    },
                    ['& .nhsd-viz-body, & .nhsd-viz-body svg']: {
                        color: palette.text,
                        fill: palette.text,
                    },
                    ['& .nhsd-viz-body-2, & .nhsd-viz-body-2 svg']: {
                        color: palette.text2,
                        fill: palette.text2,
                    },
                    '& .nhsd-viz-intro-text': {
                        fontSize: '2.2em',
                        lineHeight: '1.2em',
                        fontWeight: 'bold',
                        marginBottom: '0.7em',
                    },
                    '& .nhsd-viz-chart-content-wrapper': {
                        display: 'flex',
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2.2em',
                        textAlign: 'left',
                    },
                    '& .nhsd-viz-chart': {
                        maxWidth: '20em',
                        width: '50%',
                    },
                    '& .nhsd-viz-chart-content': {
                        maxWidth: '26em',
                        width: '50%',
                    },
                    '& .nhsd-viz-lead-paragraph': {
                        fontSize: '3.6em',
                        lineHeight: '1em',
                        fontWeight: 'bold',
                        marginBottom: '0.1em',
                    },
                    '& .nhsd-viz-second-paragraph': {
                        fontSize: '2em',
                        lineHeight: '1em',
                        fontWeight: 'bold',
                    },
                    '& .nhsd-viz-closing-paragraph': {
                        display: 'flex',
                        marginTop: '1em',
                        fontWeight: 'bold',
                        fontSize: '1.5em',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5em',
                    },
                    '& .nhsd-viz-closing-paragraph svg': {
                        width: '1em',
                        height: '1em',
                    },
                    '& .nhsd-viz-source-text': {
                        fontSize: '0.8em',
                        textAlign: 'right',
                        position: 'absolute',
                        right: '0.8em',
                        bottom: '0.6em',
                    }
                },
                [`@media (max-width: ${options.desktopViewport}px)`]: {
                    [`#nhsd-viz-${options.visualisationId}`]: {
                        fontSize: '0.8em',
                        '& .nhsd-viz-chart-content-wrapper': {
                            textAlign: 'center',
                            flexDirection: 'column',
                            gap: '1.5em',
                        },
                        '& .nhsd-viz-chart': {
                            width: '100%',
                        },
                        '& .nhsd-viz-chart-content': {
                            maxWidth: '100%',
                            width: '100%',
                        },
                        '& .nhsd-viz-lead-paragraph': {
                            fontSize: '3em',
                        }
                    }
                }
            }
        });
        target.insert('style').html(sheet.toString());
        if (options.vizType == 'pie' || options.vizType == 'doughnut') {
            const sheet = jss.createStyleSheet({
                '@global': {
                    [`#nhsd-viz-${options.visualisationId}`]: {
                        ['& .nhsd-viz-pie, & .nhsd-viz-doughnut']: {
                            transform: 'scale(1.06)',
                        },
                        ['& .nhsd-viz-pie .nhsd-viz-pie-arcs path, & .nhsd-viz-doughnut .nhsd-viz-doughnut-arcs path']: {
                            stroke: palette.background,
                            strokeWidth: 4,
                        },
                        ['& .nhsd-viz-pie .nhsd-viz-pie-arrow path, & .nhsd-viz-doughnut .nhsd-viz-doughnut-arrow path']: {
                            strokeWidth: 0,
                        }
                    }
                }
            });
            target.insert('style').html(sheet.toString());
        }
        if (options.vizType == 'doughnut') {
            const sheet = jss.createStyleSheet({
                '@global': {
                    [`#nhsd-viz-${options.visualisationId}`]: {
                        ['& .nhsd-viz-chart-content-wrapper']: {
                            gap: '1em',
                        },
                        '& .nhsd-viz-chart': {
                            position: 'relative',
                        },
                        '& .nhsd-viz-chart .nhsd-viz-doughnut-percentage': {
                            position: 'absolute',
                            top: '0',
                            left: '0',
                            bottom: '0',
                            right: '0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '4.8em',
                            fontWeight: 'bold',
                        }
                    }
                }
            });
            target.insert('style').html(sheet.toString());
        }
        if (options.vizType == 'icon' || options.vizType == 'stat') {
            const sheet = jss.createStyleSheet({
                '@global': {
                    [`#nhsd-viz-${options.visualisationId}`]: {
                        '& .nhsd-viz-chart-content-wrapper': {
                            flexDirection: 'column',
                            gap: '1.5em',
                        },
                        '& .nhsd-viz-chart, & .nhsd-viz-chart-content': {
                            maxWidth: '40em',
                            width: '100%',
                        },
                        '& .nhsd-viz-chart-content': {
                            textAlign: 'center',
                        }
                    }
                }
            });
            target.insert('style').html(sheet.toString());
        }
        if (options.vizType == 'icon') {
            const sheet = jss.createStyleSheet({
                '@global': {
                    [`#nhsd-viz-${options.visualisationId}`]: {
                        '& .nhsd-viz-icon-list': {
                            width: '100%',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                        },
                        '& .nhsd-viz-icon-wrapper': {
                            position: 'relative',
                            '&:before': {
                                content: '""',
                                display: 'block',
                                width: '100%',
                                paddingTop: '100%',
                            },
                        },
                        '& .nhsd-viz-icon': {
                            position: 'absolute',
                            top: '6%',
                            left: '6%',
                            right: '6%',
                            bottom: '6%',
                            '& .nhsd-viz-default-icon, & img': {
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            },
                            '& .nhsd-viz-default-icon': {
                                borderRadius: '5%',
                                background: palette.primary,
                            },
                            '& .nhsd-viz-icon-mask': {
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                background: palette.background,
                                opacity: 0.8,
                            }
                        },
                        '& .nhsd-viz-icon--inactive': {
                            opacity: 0.2,
                        },
                    },
                    [`@media (max-width: ${options.desktopViewport}px)`]: {
                        [`#nhsd-viz-${options.visualisationId}`]: {
                            '& .nhsd-viz-chart': {
                                maxWidth: '28em',
                            }
                        }
                    }
                }
            });
            target.insert('style').html(sheet.toString());
        }
        if (options.vizType == 'stat') {
            const sheet = jss.createStyleSheet({
                '@global': {
                    [`#nhsd-viz-${options.visualisationId}`]: {
                        '& .nhsd-viz-chart-content-wrapper': {
                            margin: '0.8em 0',
                        }
                    }
                }
            });
            target.insert('style').html(sheet.toString());
        }
    }

    function chartTitle (vizWrapper, options) {
        if (!options.title)
            return;
        vizWrapper.select('.nhsd-viz-content')
            .attr('aria-labelledby', `nhsd-viz-${options.visualisationId}-title`)
            .append('h1')
            .attr('id', `nhsd-viz-${options.visualisationId}-title`)
            .classed('nhsd-viz-title', true)
            .text(options.title);
    }

    function content (vizWrapper, options) {
        if (options.data) {
            const chartTextWrapper = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
                .append('div')
                .classed('nhsd-viz-chart-content', true);
            let chartHeadline = '';
            let chartDesc = options.data.description;
            if (options.data.percent) {
                if (options.vizType !== 'doughnut') {
                    chartHeadline = `${options.data.percent}%`;
                }
                chartHeadline += ` of ${options.data.subject}`;
            }
            else if (options.data.ratio) {
                chartHeadline = `${options.data.ratio.numerator} in ${options.data.ratio.denominator} ${options.data.subject}`;
            }
            else if (options.data.quantity) {
                chartHeadline = `${options.data.quantity.toLocaleString('en-gb')}`;
                chartDesc = `${options.data.subject} ${options.data.description}`;
            }
            chartTextWrapper.append('div')
                .classed('nhsd-viz-body', true)
                .classed('nhsd-viz-lead-paragraph', true)
                .html(chartHeadline);
            chartTextWrapper.append('div')
                .classed('nhsd-viz-body-2', true)
                .classed('nhsd-viz-second-paragraph', true)
                .text(chartDesc);
        }
    }

    function changeText (vizWrapper, options) {
        if (options.data.change) {
            let changeText = '';
            if (options.data.change.percent > 0) {
                changeText += `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="16px" height="16px" x="0" y="0" aria-label="Up"><path d="M1,7.5L8,1l7,6.5L13.5,9L9,4.8L9,15H7L7,4.8L2.5,9L1,7.5z"></path></svg> `;
            }
            else if (options.data.change.percent < 0) {
                changeText += `<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" viewBox="0 0 16 16" width="16px" height="16px" x="0" y="0" aria-label="Down"><path d="M15,8.5L8,15L1,8.5L2.5,7L7,11.2L7,1l2,0l0,10.2L13.5,7L15,8.5z"></path></svg> `;
            }
            if (options.data.change.percent != 0) {
                changeText += `${Math.abs(options.data.change.percent)}% `;
            }
            else {
                changeText += 'No change ';
            }
            if (options.data.change.from !== undefined) {
                changeText += `from ${options.data.change.from} in `;
            }
            else {
                changeText += 'since ';
            }
            changeText += options.data.change.date;
            vizWrapper.select('.nhsd-viz-content')
                .insert('div')
                .classed('nhsd-viz-body', true)
                .classed('nhsd-viz-closing-paragraph', true)
                .html(changeText);
        }
    }

    function sourceText (vizWrapper, options) {
        if (options.source && options.source.text) {
            const element = vizWrapper.append('div')
                .classed('nhsd-viz-body-2', true)
                .classed('nhsd-viz-source-text', true)
                .text('Source: ');
            if (options.source.href) {
                element.append('a')
                    .attr('href', options.source.href)
                    .text(options.source.text);
            }
            else {
                element.append('span')
                    .text(options.source.text);
            }
        }
    }

    function introText (vizWrapper, options) {
        if (!options.introText)
            return;
        vizWrapper.select('.nhsd-viz-content')
            .append('div')
            .classed('nhsd-viz-body', true)
            .classed('nhsd-viz-intro-text', true)
            .text(options.introText);
    }

    function pie (vizChart, options) {
        var width = 300;
        var radius = width / 2;
        var arrowSize = radius * 0.08;
        var arrowOffset = radius * 0.02;
        var selectedOffset = radius * 0.07;
        var arcRadius = radius - selectedOffset - arrowSize - arrowOffset;
        if (!options.data || !options.data.percent)
            return;
        const svg = vizChart.insert('svg')
            .attr('xmlns', 'http://www.w3.org/2000/svg')
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .attr("viewBox", [0, 0, width, width])
            .attr('aria-hidden', true)
            .style('width', '100%');
        var arc$1 = arc()
            .outerRadius(arcRadius)
            .innerRadius(0);
        var pie = pie$1()
            .sortValues((a, b) => a - b);
        var svgGroup = svg
            .classed('nhsd-viz-pie', true)
            .append("g")
            .attr("transform", "translate(" + radius + "," + radius + ")")
            .classed('nhsd-viz-pie-arcs', true);
        var data = [options.data.percent, 100 - options.data.percent];
        var emptyPies = svgGroup.selectAll(".arc")
            .data(pie(data))
            .enter()
            .append("g");
        emptyPies.append("path")
            .attr("d", arc$1)
            .attr("transform", (d, i) => {
            if (i > 0)
                return `translate(0,0)`;
            var angle = (d.startAngle + d.endAngle) / 2;
            var xOff = Math.sin(angle) * selectedOffset;
            var yOff = -Math.cos(angle) * selectedOffset;
            return `translate(${(xOff)},${(yOff)})`;
        })
            .attr('class', (d, i) => i == 0 ? 'nhsd-viz-fill-primary' : 'nhsd-viz-fill-secondary');
        const arcs = pie(data);
        if (arcs && arcs[0]) {
            var angle = (arcs[0].startAngle + arcs[0].endAngle) / 2;
            var angleDeg = angle * (180 / Math.PI);
            const line$1 = line();
            const arrowGroup = svgGroup.append('g')
                .classed('nhsd-viz-pie-arrow', true);
            arrowGroup.append("path")
                .attr("d", line$1([[0, 0], [arrowSize * 0.8, -arrowSize], [-arrowSize * 0.8, -arrowSize]]))
                .classed('nhsd-viz-fill-primary', true)
                .attr('transform', `rotate(${angleDeg}) translate(${0},${-(arcRadius + selectedOffset + arrowOffset)})`);
        }
        return svgGroup;
    }

    function doughnut (vizChart, options) {
        var width = 300;
        var radius = width / 2;
        var arrowSize = radius * 0.06;
        var arrowOffset = radius * 0.02;
        var selectedOffset = radius * 0.07;
        var arcRadius = radius - selectedOffset - arrowSize - arrowOffset;
        if (!options.data || !options.data.percent)
            return;
        const svg = vizChart.insert('svg')
            .attr('xmlns', 'http://www.w3.org/2000/svg')
            .attr('preserveAspectRatio', 'xMidYMid meet')
            .attr("viewBox", [0, 0, width, width])
            .attr('aria-hidden', true)
            .style('width', '100%');
        var arc$1 = arc()
            .outerRadius(arcRadius)
            .innerRadius(arcRadius * 0.75);
        var pie = pie$1()
            .sortValues((a, b) => a - b);
        var svgGroup = svg
            .classed('nhsd-viz-doughnut', true)
            .append("g")
            .attr("transform", "translate(" + radius + "," + radius + ")")
            .classed('nhsd-viz-doughnut-arcs', true);
        var data = [options.data.percent, 100 - options.data.percent];
        var emptyPies = svgGroup.selectAll(".nhsd-viz-doughnut-arcs")
            .data(pie(data))
            .enter()
            .append("g");
        emptyPies.append("path")
            .attr("d", arc$1)
            .attr('class', (d, i) => i == 0 ? 'nhsd-viz-fill-primary' : 'nhsd-viz-fill-secondary');
        const arcs = pie(data);
        if (arcs && arcs[0]) {
            var angle = (arcs[0].startAngle + arcs[0].endAngle) / 2;
            var angleDeg = angle * (180 / Math.PI);
            const line$1 = line();
            const arrowGroup = svgGroup.append('g')
                .classed('nhsd-viz-doughnut-arrow', true);
            arrowGroup.append("path")
                .attr("d", line$1([[0, 0], [arrowSize * 0.8, -arrowSize], [-arrowSize * 0.8, -arrowSize]]))
                .classed('nhsd-viz-fill-primary', true)
                .attr('transform', `rotate(${angleDeg}) translate(${0},${-(arcRadius + arrowOffset)})`);
        }
        vizChart.insert('div')
            .classed('nhsd-viz-doughnut-percentage', true)
            .classed('nhsd-viz-body', true)
            .text(`${options.data.percent}%`);
        return svgGroup;
    }

    function isMobile (desktopViewport) {
        return window.innerWidth <= desktopViewport;
    }

    function icon (vizChart, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options.data || !options.data.ratio || !options.data.ratio.numerator || !options.data.ratio.denominator)
                return;
            const { numerator, denominator } = options.data.ratio;
            let itemsPerRow = 10;
            if (isMobile(options.desktopViewport)) {
                itemsPerRow = 5;
                if (denominator % 5 != 0) {
                    if (denominator % 6 == 0) {
                        itemsPerRow = 6;
                    }
                    else if (denominator % 4 == 0) {
                        itemsPerRow = 4;
                    }
                }
            }
            else if (denominator % 10 != 0) {
                if (denominator % 13 == 0) {
                    itemsPerRow = 7;
                }
                else if (denominator % 12 == 0) {
                    itemsPerRow = 12;
                }
                else if (denominator % 8 == 0) {
                    itemsPerRow = 8;
                }
                else if (denominator % 6 == 0) {
                    itemsPerRow = 6;
                }
                else if (denominator % 5 == 0) {
                    itemsPerRow = 5;
                }
            }
            let iconImg = null;
            if (options.icon) {
                try {
                    iconImg = yield image(options.icon);
                }
                catch (e) {
                    console.error(e);
                    iconImg = null;
                }
            }
            const iconWrapper = vizChart.insert('div')
                .attr('aria-hidden', true)
                .classed('nhsd-viz-icon-list', true);
            for (let i = 0; i < denominator; i++) {
                const icon = iconWrapper.append('div')
                    .classed('nhsd-viz-icon-wrapper', true)
                    .style('width', `${100 / itemsPerRow}%`)
                    .append('div')
                    .classed('nhsd-viz-icon', true)
                    .classed('nhsd-viz-icon--inactive', i >= numerator);
                if (options.icon && iconImg) {
                    icon.insert('img')
                        .attr('src', iconImg.src);
                }
                else {
                    icon.insert('div')
                        .classed('nhsd-viz-default-icon', true);
                }
                const fraction = numerator - i;
                if (fraction < 1 && fraction > 0) {
                    icon.insert('div')
                        .classed('nhsd-viz-icon-mask', true)
                        .style('left', `${fraction * 100}%`);
                }
            }
        });
    }

    const isDoughnut = (options) => options.vizType == 'doughnut';
    const isIcon = (options) => options.vizType == 'icon';
    const isPie = (options) => options.vizType == 'pie';
    function vizChart (vizWrapper, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!isDoughnut(options) && !isIcon(options) && !isPie(options))
                return;
            const vizChart = vizWrapper.select('.nhsd-viz-chart-content-wrapper')
                .insert('div')
                .classed('nhsd-viz-chart', true);
            try {
                if (isDoughnut(options)) {
                    yield doughnut(vizChart, options);
                }
                else if (isIcon(options)) {
                    yield icon(vizChart, options);
                }
                else if (isPie(options)) {
                    yield pie(vizChart, options);
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }

    function debounce(func, wait, immediate = false) {
        let timeout;
        return function executedFunction() {
            const context = this;
            const args = arguments;
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            }, wait);
            if (callNow)
                func.apply(context, args);
        };
    }

    const generateId = () => Math.random().toString(16).slice(2);
    function optionDefaults (options) {
        const visualisationId = generateId();
        const vizType = options.vizType || 'pie';
        const desktopViewport = options.desktopViewport || defaultConf.desktopViewport;
        const fullOptions = Object.assign(Object.assign({}, options), { visualisationId,
            vizType,
            desktopViewport });
        return fullOptions;
    }

    function render(selector, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const fullOptions = optionDefaults(options);
            const target = select(selector).html("");
            chartStyles(target, fullOptions);
            const vizWrapper = target.insert('article')
                .attr('id', `nhsd-viz-${fullOptions.visualisationId}`)
                .attr('class', `nhsd-viz`);
            vizWrapper.insert('div')
                .attr('class', `nhsd-viz-content`);
            chartTitle(vizWrapper, fullOptions);
            introText(vizWrapper, fullOptions);
            vizWrapper.select('.nhsd-viz-content')
                .insert('div')
                .classed('nhsd-viz-chart-content-wrapper', true);
            yield vizChart(vizWrapper, fullOptions);
            content(vizWrapper, fullOptions);
            changeText(vizWrapper, fullOptions);
            sourceText(vizWrapper, fullOptions);
            return vizWrapper.node();
        });
    }
    function chart(selector, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (select(selector).empty()) {
                throw new Error(`Selector "${selector}" not found`);
            }
            if (!options) {
                throw new Error("Visualisation options not set");
            }
            const debouncedRender = debounce(() => render(selector, options), 250);
            window.addEventListener('resize', debouncedRender);
            yield render(selector, options);
        });
    }

    exports.chart = chart;
    exports.createPalette = createPalette;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
