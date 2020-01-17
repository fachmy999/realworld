import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, e as element, t as text, a as space, b as claim_element, f as children, h as detach_dev, g as claim_text, j as claim_space, k as attr_dev, l as add_location, K as listen_dev, o as insert_dev, p as append_dev, q as set_data_dev, n as noop, U as prevent_default, V as set_input_value, W as run_all, O as createEventDispatcher, C as empty, u as mount_component, y as transition_in, z as transition_out, A as destroy_component, H as group_outros, I as check_outros, M as update_keyed_each, N as outro_and_destroy_block, v as validate_store, c as component_subscribe, R as onMount, L as destroy_each } from './chunk.6414288c.js';
import { g as goto, a as stores$1 } from './chunk.78ecd290.js';
import { d as del, p as post, g as get } from './chunk.11f50e20.js';
import { L as ListErrors } from './chunk.9e3350ae.js';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var marked = createCommonjsModule(function (module, exports) {
(function(root) {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  nptable: noop,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  table: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm')
  .replace(/bull/g, block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block.paragraph)
  .replace('hr', block.hr)
  .replace('heading', block.heading)
  .replace('lheading', block.lheading)
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = edit(block.paragraph)
  .replace('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  .getRegex();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});

/**
 * Pedantic grammar
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = Object.create(null);
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.pedantic) {
    this.rules = block.pedantic;
  } else if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top) {
  src = src.replace(/^ +$/gm, '');
  var next,
      loose,
      cap,
      bull,
      b,
      item,
      listStart,
      listItems,
      t,
      space,
      i,
      tag,
      l,
      isordered,
      istask,
      ischecked;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? rtrim(cap, '\n')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2] ? cap[2].trim() : cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (cap = this.rules.nptable.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(item.cells[i], item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];
      isordered = bull.length > 1;

      listStart = {
        type: 'list_start',
        ordered: isordered,
        start: isordered ? +bull : '',
        loose: false
      };

      this.tokens.push(listStart);

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      listItems = [];
      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) */, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull.length > 1 ? b.length === 1
            : (b.length > 1 || (this.options.smartLists && b !== bull))) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        if (loose) {
          listStart.loose = true;
        }

        // Check for task list items
        istask = /^\[[ xX]\] /.test(item);
        ischecked = undefined;
        if (istask) {
          ischecked = item[1] !== ' ';
          item = item.replace(/^\[[ xX]\] +/, '');
        }

        t = {
          type: 'list_item_start',
          task: istask,
          checked: ischecked,
          loose: loose
        };

        listItems.push(t);
        this.tokens.push(t);

        // Recurse.
        this.token(item, false);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      if (listStart.loose) {
        l = listItems.length;
        i = 0;
        for (; i < l; i++) {
          listItems[i].loose = true;
        }
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if (top && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      if (!this.tokens.links[tag]) {
        this.tokens.links[tag] = {
          href: cap[2],
          title: cap[3]
        };
      }
      continue;
    }

    // table (gfm)
    if (cap = this.rules.table.exec(src)) {
      item = {
        type: 'table',
        header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        src = src.substring(cap[0].length);

        for (i = 0; i < item.align.length; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        for (i = 0; i < item.cells.length; i++) {
          item.cells[i] = splitCells(
            item.cells[i].replace(/^ *\| *| *\| *$/g, ''),
            item.header.length);
        }

        this.tokens.push(item);

        continue;
      }
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noop,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noop,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
};

// list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)
inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', block._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/;
inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace(/\{2,\}/g, '*').getRegex()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer();
  this.renderer.options = this.options;

  if (!this.links) {
    throw new Error('Tokens array requires a `links` property.');
  }

  if (this.options.pedantic) {
    this.rules = inline.pedantic;
  } else if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = '',
      link,
      text,
      href,
      title,
      cap,
      prevCapZero;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += escape(cap[1]);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = true;
      } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.inRawBlock = false;
      }

      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0];
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      var lastParenIndex = findClosingBracket(cap[2], '()');
      if (lastParenIndex > -1) {
        var linkLen = cap[0].length - (cap[2].length - lastParenIndex) - (cap[3] || '').length;
        cap[2] = cap[2].substring(0, lastParenIndex);
        cap[0] = cap[0].substring(0, linkLen).trim();
        cap[3] = '';
      }
      src = src.substring(cap[0].length);
      this.inLink = true;
      href = cap[2];
      if (this.options.pedantic) {
        link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        } else {
          title = '';
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }
      href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
      out += this.outputLink(cap, {
        href: InlineLexer.escapes(href),
        title: InlineLexer.escapes(title)
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2].trim(), true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = escape(this.mangle(cap[1]));
        href = 'mailto:' + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      if (cap[2] === '@') {
        text = escape(cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      src = src.substring(cap[0].length);
      out += this.renderer.link(href, null, text);
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      if (this.inRawBlock) {
        out += this.renderer.text(cap[0]);
      } else {
        out += this.renderer.text(escape(this.smartypants(cap[0])));
      }
      continue;
    }

    if (src) {
      throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

InlineLexer.escapes = function(text) {
  return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = link.href,
      title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = '',
      l = text.length,
      i = 0,
      ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || marked.defaults;
}

Renderer.prototype.code = function(code, infostring, escaped) {
  var lang = (infostring || '').match(/\S*/)[0];
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw, slugger) {
  if (this.options.headerIds) {
    return '<h'
      + level
      + ' id="'
      + this.options.headerPrefix
      + slugger.slug(raw)
      + '">'
      + text
      + '</h'
      + level
      + '>\n';
  }
  // ignore IDs
  return '<h' + level + '>' + text + '</h' + level + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered, start) {
  var type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
  return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.checkbox = function(checked) {
  return '<input '
    + (checked ? 'checked="" ' : '')
    + 'disabled="" type="checkbox"'
    + (this.options.xhtml ? ' /' : '')
    + '> ';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  if (body) body = '<tbody>' + body + '</tbody>';

  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + body
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' align="' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }
  var out = '<a href="' + escape(href) + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
  if (href === null) {
    return text;
  }

  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * TextRenderer
 * returns only the textual part of the token
 */

function TextRenderer() {}

// no need for block level renderers

TextRenderer.prototype.strong =
TextRenderer.prototype.em =
TextRenderer.prototype.codespan =
TextRenderer.prototype.del =
TextRenderer.prototype.text = function (text) {
  return text;
};

TextRenderer.prototype.link =
TextRenderer.prototype.image = function(href, title, text) {
  return '' + text;
};

TextRenderer.prototype.br = function() {
  return '';
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer();
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
  this.slugger = new Slugger();
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options) {
  var parser = new Parser(options);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options);
  // use an InlineLexer with a TextRenderer to extract pure text
  this.inlineText = new InlineLexer(
    src.links,
    merge({}, this.options, {renderer: new TextRenderer()})
  );
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        unescape(this.inlineText.output(this.token.text)),
        this.slugger);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = '',
          body = '',
          i,
          row,
          cell,
          j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      body = '';
      var ordered = this.token.ordered,
          start = this.token.start;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered, start);
    }
    case 'list_item_start': {
      body = '';
      var loose = this.token.loose;
      var checked = this.token.checked;
      var task = this.token.task;

      if (this.token.task) {
        body += this.renderer.checkbox(checked);
      }

      while (this.next().type !== 'list_item_end') {
        body += !loose && this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }
      return this.renderer.listitem(body, task, checked);
    }
    case 'html': {
      // TODO parse inline content if parameter markdown=1
      return this.renderer.html(this.token.text);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
    default: {
      var errMsg = 'Token with "' + this.token.type + '" type was not found.';
      if (this.options.silent) {
        console.log(errMsg);
      } else {
        throw new Error(errMsg);
      }
    }
  }
};

/**
 * Slugger generates header id
 */

function Slugger () {
  this.seen = {};
}

/**
 * Convert string to unique id
 */

Slugger.prototype.slug = function (value) {
  var slug = value
    .toLowerCase()
    .trim()
    .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
    .replace(/\s/g, '-');

  if (this.seen.hasOwnProperty(slug)) {
    var originalSlug = slug;
    do {
      this.seen[originalSlug]++;
      slug = originalSlug + '-' + this.seen[originalSlug];
    } while (this.seen.hasOwnProperty(slug));
  }
  this.seen[slug] = 0;

  return slug;
};

/**
 * Helpers
 */

function escape(html, encode) {
  if (encode) {
    if (escape.escapeTest.test(html)) {
      return html.replace(escape.escapeReplace, function (ch) { return escape.replacements[ch]; });
    }
  } else {
    if (escape.escapeTestNoEncode.test(html)) {
      return html.replace(escape.escapeReplaceNoEncode, function (ch) { return escape.replacements[ch]; });
    }
  }

  return html;
}

escape.escapeTest = /[&<>"']/;
escape.escapeReplace = /[&<>"']/g;
escape.replacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  return {
    replace: function(name, val) {
      val = val.source || val;
      val = val.replace(/(^|[^\[])\^/g, '$1');
      regex = regex.replace(name, val);
      return this;
    },
    getRegex: function() {
      return new RegExp(regex, opt);
    }
  };
}

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (/^[^:]+:\/*[^/]*$/.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];

  if (href.slice(0, 2) === '//') {
    return base.replace(/:[\s\S]*/, ':') + href;
  } else if (href.charAt(0) === '/') {
    return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
  } else {
    return base + href;
  }
}
var baseUrls = {};
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
        var escaped = false,
            curr = offset;
        while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
        if (escaped) {
          // odd number of slashes means | is escaped
          // so we leave it alone
          return '|';
        } else {
          // add space before unescaped |
          return ' |';
        }
      }),
      cells = row.split(/ \|/),
      i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

// Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.
function rtrim(str, c, invert) {
  if (str.length === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  var suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < str.length) {
    var currChar = str.charAt(str.length - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, str.length - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  var level = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

/**
 * Marked
 */

function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight,
        tokens,
        pending,
        i = 0;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.getDefaults = function () {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: new Renderer(),
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tables: true,
    xhtml: false
  };
};

marked.defaults = marked.getDefaults();

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.Slugger = Slugger;

marked.parse = marked;

{
  module.exports = marked;
}
})();
});

/* src/routes/article/_ArticleMeta.svelte generated by Svelte v3.12.1 */

const file = "src/routes/article/_ArticleMeta.svelte";

// (28:1) {#if canModify}
function create_if_block(ctx) {
	var span, a, i0, t0, a_href_value, t1, button, i1, t2, dispose;

	const block = {
		c: function create() {
			span = element("span");
			a = element("a");
			i0 = element("i");
			t0 = text(" Edit Article");
			t1 = space();
			button = element("button");
			i1 = element("i");
			t2 = text(" Delete Article");
			this.h();
		},

		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {}, false);
			var span_nodes = children(span);

			a = claim_element(span_nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			i0 = claim_element(a_nodes, "I", { class: true }, false);
			var i0_nodes = children(i0);

			i0_nodes.forEach(detach_dev);
			t0 = claim_text(a_nodes, " Edit Article");
			a_nodes.forEach(detach_dev);
			t1 = claim_space(span_nodes);

			button = claim_element(span_nodes, "BUTTON", { class: true }, false);
			var button_nodes = children(button);

			i1 = claim_element(button_nodes, "I", { class: true }, false);
			var i1_nodes = children(i1);

			i1_nodes.forEach(detach_dev);
			t2 = claim_text(button_nodes, " Delete Article");
			button_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(i0, "class", "ion-edit");
			add_location(i0, file, 30, 4, 767);
			attr_dev(a, "href", a_href_value = "/editor/" + ctx.article.slug);
			attr_dev(a, "class", "btn btn-outline-secondary btn-sm");
			add_location(a, file, 29, 3, 688);
			attr_dev(i1, "class", "ion-trash-a");
			add_location(i1, file, 34, 4, 885);
			attr_dev(button, "class", "btn btn-outline-danger btn-sm");
			add_location(button, file, 33, 3, 814);
			add_location(span, file, 28, 2, 678);
			dispose = listen_dev(button, "click", ctx.remove);
		},

		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, a);
			append_dev(a, i0);
			append_dev(a, t0);
			append_dev(span, t1);
			append_dev(span, button);
			append_dev(button, i1);
			append_dev(button, t2);
		},

		p: function update(changed, ctx) {
			if ((changed.article) && a_href_value !== (a_href_value = "/editor/" + ctx.article.slug)) {
				attr_dev(a, "href", a_href_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(span);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block.name, type: "if", source: "(28:1) {#if canModify}", ctx });
	return block;
}

function create_fragment(ctx) {
	var div1, a0, img, img_src_value, img_alt_value, a0_href_value, t0, div0, a1, t1_value = ctx.article.author.username + "", t1, a1_href_value, t2, span, t3_value = new Date(ctx.article.createdAt).toDateString() + "", t3, t4;

	var if_block = (ctx.canModify) && create_if_block(ctx);

	const block = {
		c: function create() {
			div1 = element("div");
			a0 = element("a");
			img = element("img");
			t0 = space();
			div0 = element("div");
			a1 = element("a");
			t1 = text(t1_value);
			t2 = space();
			span = element("span");
			t3 = text(t3_value);
			t4 = space();
			if (if_block) if_block.c();
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			a0 = claim_element(div1_nodes, "A", { href: true }, false);
			var a0_nodes = children(a0);

			img = claim_element(a0_nodes, "IMG", { src: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div1_nodes);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			a1 = claim_element(div0_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t1 = claim_text(a1_nodes, t1_value);
			a1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);

			span = claim_element(div0_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t3 = claim_text(span_nodes, t3_value);
			span_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			if (if_block) if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(img, "src", img_src_value = ctx.article.author.image);
			attr_dev(img, "alt", img_alt_value = ctx.article.author.username);
			add_location(img, file, 17, 2, 384);
			attr_dev(a0, "href", a0_href_value = "/profile/@" + ctx.article.author.username);
			add_location(a0, file, 16, 1, 335);
			attr_dev(a1, "href", a1_href_value = "/profile/@" + ctx.article.author.username);
			attr_dev(a1, "class", "author");
			add_location(a1, file, 21, 2, 478);
			attr_dev(span, "class", "date");
			add_location(span, file, 22, 2, 572);
			attr_dev(div0, "class", "info");
			add_location(div0, file, 20, 1, 457);
			attr_dev(div1, "class", "article-meta");
			add_location(div1, file, 15, 0, 307);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, a0);
			append_dev(a0, img);
			append_dev(div1, t0);
			append_dev(div1, div0);
			append_dev(div0, a1);
			append_dev(a1, t1);
			append_dev(div0, t2);
			append_dev(div0, span);
			append_dev(span, t3);
			append_dev(div1, t4);
			if (if_block) if_block.m(div1, null);
		},

		p: function update(changed, ctx) {
			if ((changed.article) && img_src_value !== (img_src_value = ctx.article.author.image)) {
				attr_dev(img, "src", img_src_value);
			}

			if ((changed.article) && img_alt_value !== (img_alt_value = ctx.article.author.username)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((changed.article) && a0_href_value !== (a0_href_value = "/profile/@" + ctx.article.author.username)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if ((changed.article) && t1_value !== (t1_value = ctx.article.author.username + "")) {
				set_data_dev(t1, t1_value);
			}

			if ((changed.article) && a1_href_value !== (a1_href_value = "/profile/@" + ctx.article.author.username)) {
				attr_dev(a1, "href", a1_href_value);
			}

			if ((changed.article) && t3_value !== (t3_value = new Date(ctx.article.createdAt).toDateString() + "")) {
				set_data_dev(t3, t3_value);
			}

			if (ctx.canModify) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div1, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div1);
			}

			if (if_block) if_block.d();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment.name, type: "component", source: "", ctx });
	return block;
}

function instance($$self, $$props, $$invalidate) {
	

	let { article, user } = $$props;

	async function remove() {
		await del(`/articles/${article.slug}`, user && user.token);
		goto('/');
	}

	const writable_props = ['article', 'user'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<ArticleMeta> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
	};

	$$self.$capture_state = () => {
		return { article, user, canModify };
	};

	$$self.$inject_state = $$props => {
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
		if ('canModify' in $$props) $$invalidate('canModify', canModify = $$props.canModify);
	};

	let canModify;

	$$self.$$.update = ($$dirty = { user: 1, article: 1 }) => {
		if ($$dirty.user || $$dirty.article) { $$invalidate('canModify', canModify = user && article.author.username === user.username); }
	};

	return { article, user, remove, canModify };
}

class ArticleMeta extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["article", "user"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "ArticleMeta", options, id: create_fragment.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.article === undefined && !('article' in props)) {
			console.warn("<ArticleMeta> was created without expected prop 'article'");
		}
		if (ctx.user === undefined && !('user' in props)) {
			console.warn("<ArticleMeta> was created without expected prop 'user'");
		}
	}

	get article() {
		throw new Error("<ArticleMeta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set article(value) {
		throw new Error("<ArticleMeta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<ArticleMeta>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<ArticleMeta>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/article/_CommentInput.svelte generated by Svelte v3.12.1 */

const file$1 = "src/routes/article/_CommentInput.svelte";

function create_fragment$1(ctx) {
	var form, div0, textarea, t0, div1, img, img_src_value, img_alt_value, t1, button, t2, dispose;

	const block = {
		c: function create() {
			form = element("form");
			div0 = element("div");
			textarea = element("textarea");
			t0 = space();
			div1 = element("div");
			img = element("img");
			t1 = space();
			button = element("button");
			t2 = text("Post Comment");
			this.h();
		},

		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { class: true }, false);
			var form_nodes = children(form);

			div0 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			textarea = claim_element(div0_nodes, "TEXTAREA", { class: true, placeholder: true, rows: true }, false);
			var textarea_nodes = children(textarea);

			textarea_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(form_nodes);

			div1 = claim_element(form_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			img = claim_element(div1_nodes, "IMG", { src: true, class: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);

			button = claim_element(div1_nodes, "BUTTON", { class: true, type: true }, false);
			var button_nodes = children(button);

			t2 = claim_text(button_nodes, "Post Comment");
			button_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			form_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(textarea, "class", "form-control");
			attr_dev(textarea, "placeholder", "Write a comment...");
			attr_dev(textarea, "rows", "3");
			add_location(textarea, file$1, 23, 2, 520);
			attr_dev(div0, "class", "card-block");
			add_location(div0, file$1, 22, 1, 493);
			attr_dev(img, "src", img_src_value = ctx.user.image);
			attr_dev(img, "class", "comment-author-img");
			attr_dev(img, "alt", img_alt_value = ctx.user.username);
			add_location(img, file$1, 27, 2, 651);
			attr_dev(button, "class", "btn btn-sm btn-primary");
			attr_dev(button, "type", "submit");
			add_location(button, file$1, 28, 2, 724);
			attr_dev(div1, "class", "card-footer");
			add_location(div1, file$1, 26, 1, 623);
			attr_dev(form, "class", "card comment-form");
			add_location(form, file$1, 21, 0, 423);

			dispose = [
				listen_dev(textarea, "input", ctx.textarea_input_handler),
				listen_dev(form, "submit", prevent_default(ctx.submit), false, true)
			];
		},

		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			append_dev(form, div0);
			append_dev(div0, textarea);

			set_input_value(textarea, ctx.body);

			append_dev(form, t0);
			append_dev(form, div1);
			append_dev(div1, img);
			append_dev(div1, t1);
			append_dev(div1, button);
			append_dev(button, t2);
		},

		p: function update(changed, ctx) {
			if (changed.body) set_input_value(textarea, ctx.body);

			if ((changed.user) && img_src_value !== (img_src_value = ctx.user.image)) {
				attr_dev(img, "src", img_src_value);
			}

			if ((changed.user) && img_alt_value !== (img_alt_value = ctx.user.username)) {
				attr_dev(img, "alt", img_alt_value);
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(form);
			}

			run_all(dispose);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$1.name, type: "component", source: "", ctx });
	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	

	let { slug, user } = $$props;

	const dispatch = createEventDispatcher();

	let body = '';

	async function submit(event) {
		const response = await post(`articles/${slug}/comments`, { comment: { body } }, user && user.token);

		if (response.comment) {
			dispatch('commented', response);
			$$invalidate('body', body = '');
		}
	}

	const writable_props = ['slug', 'user'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<CommentInput> was created with unknown prop '${key}'`);
	});

	function textarea_input_handler() {
		body = this.value;
		$$invalidate('body', body);
	}

	$$self.$set = $$props => {
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
	};

	$$self.$capture_state = () => {
		return { slug, user, body };
	};

	$$self.$inject_state = $$props => {
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
		if ('body' in $$props) $$invalidate('body', body = $$props.body);
	};

	return {
		slug,
		user,
		body,
		submit,
		textarea_input_handler
	};
}

class CommentInput extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["slug", "user"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "CommentInput", options, id: create_fragment$1.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.slug === undefined && !('slug' in props)) {
			console.warn("<CommentInput> was created without expected prop 'slug'");
		}
		if (ctx.user === undefined && !('user' in props)) {
			console.warn("<CommentInput> was created without expected prop 'user'");
		}
	}

	get slug() {
		throw new Error("<CommentInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<CommentInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<CommentInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<CommentInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/article/_Comment.svelte generated by Svelte v3.12.1 */

const file$2 = "src/routes/article/_Comment.svelte";

// (33:2) {#if user && comment.author.username === user.username}
function create_if_block$1(ctx) {
	var span, i, dispose;

	const block = {
		c: function create() {
			span = element("span");
			i = element("i");
			this.h();
		},

		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			i = claim_element(span_nodes, "I", { class: true }, false);
			var i_nodes = children(i);

			i_nodes.forEach(detach_dev);
			span_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(i, "class", "ion-trash-a");
			add_location(i, file$2, 34, 4, 917);
			attr_dev(span, "class", "mod-options");
			add_location(span, file$2, 33, 3, 886);
			dispose = listen_dev(i, "click", ctx.remove);
		},

		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, i);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(span);
			}

			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$1.name, type: "if", source: "(33:2) {#if user && comment.author.username === user.username}", ctx });
	return block;
}

function create_fragment$2(ctx) {
	var div2, div0, p, t0_value = ctx.comment.body + "", t0, t1, div1, a0, img, img_src_value, img_alt_value, a0_href_value, t2, a1, t3_value = ctx.comment.author.username + "", t3, a1_href_value, t4, span, t5_value = new Date(ctx.comment.createdAt).toDateString() + "", t5, t6;

	var if_block = (ctx.user && ctx.comment.author.username === ctx.user.username) && create_if_block$1(ctx);

	const block = {
		c: function create() {
			div2 = element("div");
			div0 = element("div");
			p = element("p");
			t0 = text(t0_value);
			t1 = space();
			div1 = element("div");
			a0 = element("a");
			img = element("img");
			t2 = space();
			a1 = element("a");
			t3 = text(t3_value);
			t4 = space();
			span = element("span");
			t5 = text(t5_value);
			t6 = space();
			if (if_block) if_block.c();
			this.h();
		},

		l: function claim(nodes) {
			div2 = claim_element(nodes, "DIV", { class: true }, false);
			var div2_nodes = children(div2);

			div0 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			p = claim_element(div0_nodes, "P", { class: true }, false);
			var p_nodes = children(p);

			t0 = claim_text(p_nodes, t0_value);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t1 = claim_space(div2_nodes);

			div1 = claim_element(div2_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			a0 = claim_element(div1_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			img = claim_element(a0_nodes, "IMG", { src: true, class: true, alt: true }, false);
			var img_nodes = children(img);

			img_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);

			a1 = claim_element(div1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t3 = claim_text(a1_nodes, t3_value);
			a1_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);

			span = claim_element(div1_nodes, "SPAN", { class: true }, false);
			var span_nodes = children(span);

			t5 = claim_text(span_nodes, t5_value);
			span_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			if (if_block) if_block.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(p, "class", "card-text");
			add_location(p, file$2, 18, 2, 384);
			attr_dev(div0, "class", "card-block");
			add_location(div0, file$2, 17, 1, 357);
			attr_dev(img, "src", img_src_value = ctx.comment.author.image);
			attr_dev(img, "class", "comment-author-img");
			attr_dev(img, "alt", img_alt_value = ctx.comment.author.username);
			add_location(img, file$2, 23, 3, 535);
			attr_dev(a0, "href", a0_href_value = "/profile/@" + ctx.comment.author.username);
			attr_dev(a0, "class", "comment-author");
			add_location(a0, file$2, 22, 2, 462);
			attr_dev(a1, "href", a1_href_value = "/profile/@" + ctx.comment.author.username);
			attr_dev(a1, "class", "comment-author");
			add_location(a1, file$2, 26, 2, 637);
			attr_dev(span, "class", "date-posted");
			add_location(span, file$2, 28, 2, 739);
			attr_dev(div1, "class", "card-footer");
			add_location(div1, file$2, 21, 1, 434);
			attr_dev(div2, "class", "card");
			add_location(div2, file$2, 16, 0, 337);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div0, p);
			append_dev(p, t0);
			append_dev(div2, t1);
			append_dev(div2, div1);
			append_dev(div1, a0);
			append_dev(a0, img);
			append_dev(div1, t2);
			append_dev(div1, a1);
			append_dev(a1, t3);
			append_dev(div1, t4);
			append_dev(div1, span);
			append_dev(span, t5);
			append_dev(div1, t6);
			if (if_block) if_block.m(div1, null);
		},

		p: function update(changed, ctx) {
			if ((changed.comment) && t0_value !== (t0_value = ctx.comment.body + "")) {
				set_data_dev(t0, t0_value);
			}

			if ((changed.comment) && img_src_value !== (img_src_value = ctx.comment.author.image)) {
				attr_dev(img, "src", img_src_value);
			}

			if ((changed.comment) && img_alt_value !== (img_alt_value = ctx.comment.author.username)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((changed.comment) && a0_href_value !== (a0_href_value = "/profile/@" + ctx.comment.author.username)) {
				attr_dev(a0, "href", a0_href_value);
			}

			if ((changed.comment) && t3_value !== (t3_value = ctx.comment.author.username + "")) {
				set_data_dev(t3, t3_value);
			}

			if ((changed.comment) && a1_href_value !== (a1_href_value = "/profile/@" + ctx.comment.author.username)) {
				attr_dev(a1, "href", a1_href_value);
			}

			if ((changed.comment) && t5_value !== (t5_value = new Date(ctx.comment.createdAt).toDateString() + "")) {
				set_data_dev(t5, t5_value);
			}

			if (ctx.user && ctx.comment.author.username === ctx.user.username) {
				if (!if_block) {
					if_block = create_if_block$1(ctx);
					if_block.c();
					if_block.m(div1, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div2);
			}

			if (if_block) if_block.d();
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$2.name, type: "component", source: "", ctx });
	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	

	let { comment, slug, user } = $$props;

	const dispatch = createEventDispatcher();

	async function remove() {
		await del(`articles/${slug}/comments/${comment.id}`, user && user.token);
		dispatch("deleted");
	}

	const writable_props = ['comment', 'slug', 'user'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Comment> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('comment' in $$props) $$invalidate('comment', comment = $$props.comment);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
	};

	$$self.$capture_state = () => {
		return { comment, slug, user };
	};

	$$self.$inject_state = $$props => {
		if ('comment' in $$props) $$invalidate('comment', comment = $$props.comment);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
	};

	return { comment, slug, user, remove };
}

class Comment extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, ["comment", "slug", "user"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Comment", options, id: create_fragment$2.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.comment === undefined && !('comment' in props)) {
			console.warn("<Comment> was created without expected prop 'comment'");
		}
		if (ctx.slug === undefined && !('slug' in props)) {
			console.warn("<Comment> was created without expected prop 'slug'");
		}
		if (ctx.user === undefined && !('user' in props)) {
			console.warn("<Comment> was created without expected prop 'user'");
		}
	}

	get comment() {
		throw new Error("<Comment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set comment(value) {
		throw new Error("<Comment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<Comment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Comment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<Comment>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<Comment>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/article/_CommentContainer.svelte generated by Svelte v3.12.1 */

const file$3 = "src/routes/article/_CommentContainer.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.comment = list[i];
	child_ctx.i = i;
	return child_ctx;
}

// (18:1) {:else}
function create_else_block(ctx) {
	var p, a0, t0, t1, a1, t2, t3;

	const block = {
		c: function create() {
			p = element("p");
			a0 = element("a");
			t0 = text("Sign in");
			t1 = text(" or ");
			a1 = element("a");
			t2 = text("sign up");
			t3 = text(" to add comments on this article.");
			this.h();
		},

		l: function claim(nodes) {
			p = claim_element(nodes, "P", {}, false);
			var p_nodes = children(p);

			a0 = claim_element(p_nodes, "A", { href: true }, false);
			var a0_nodes = children(a0);

			t0 = claim_text(a0_nodes, "Sign in");
			a0_nodes.forEach(detach_dev);
			t1 = claim_text(p_nodes, " or ");

			a1 = claim_element(p_nodes, "A", { href: true }, false);
			var a1_nodes = children(a1);

			t2 = claim_text(a1_nodes, "sign up");
			a1_nodes.forEach(detach_dev);
			t3 = claim_text(p_nodes, " to add comments on this article.");
			p_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(a0, "href", "/login");
			add_location(a0, file$3, 19, 3, 479);
			attr_dev(a1, "href", "/register");
			add_location(a1, file$3, 19, 35, 511);
			add_location(p, file$3, 18, 2, 472);
		},

		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, a0);
			append_dev(a0, t0);
			append_dev(p, t1);
			append_dev(p, a1);
			append_dev(a1, t2);
			append_dev(p, t3);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(p);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_else_block.name, type: "else", source: "(18:1) {:else}", ctx });
	return block;
}

// (13:1) {#if user}
function create_if_block$2(ctx) {
	var div, t, current;

	var listerrors = new ListErrors({
		props: { errors: ctx.errors },
		$$inline: true
	});

	var commentinput = new CommentInput({
		props: { slug: ctx.slug, user: ctx.user },
		$$inline: true
	});
	commentinput.$on("commented", ctx.commented_handler);

	const block = {
		c: function create() {
			div = element("div");
			listerrors.$$.fragment.c();
			t = space();
			commentinput.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {}, false);
			var div_nodes = children(div);

			listerrors.$$.fragment.l(div_nodes);
			t = claim_space(div_nodes);
			commentinput.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			add_location(div, file$3, 13, 2, 312);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(listerrors, div, null);
			append_dev(div, t);
			mount_component(commentinput, div, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var listerrors_changes = {};
			if (changed.errors) listerrors_changes.errors = ctx.errors;
			listerrors.$set(listerrors_changes);

			var commentinput_changes = {};
			if (changed.slug) commentinput_changes.slug = ctx.slug;
			if (changed.user) commentinput_changes.user = ctx.user;
			commentinput.$set(commentinput_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(listerrors.$$.fragment, local);

			transition_in(commentinput.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(listerrors.$$.fragment, local);
			transition_out(commentinput.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div);
			}

			destroy_component(listerrors);

			destroy_component(commentinput);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_if_block$2.name, type: "if", source: "(13:1) {#if user}", ctx });
	return block;
}

// (24:1) {#each comments as comment, i (comment.id)}
function create_each_block(key_1, ctx) {
	var first, current;

	function deleted_handler() {
		return ctx.deleted_handler(ctx);
	}

	var comment = new Comment({
		props: {
		comment: ctx.comment,
		slug: ctx.slug,
		user: ctx.user
	},
		$$inline: true
	});
	comment.$on("deleted", deleted_handler);

	const block = {
		key: key_1,

		first: null,

		c: function create() {
			first = empty();
			comment.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			first = empty();
			comment.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			this.first = first;
		},

		m: function mount(target, anchor) {
			insert_dev(target, first, anchor);
			mount_component(comment, target, anchor);
			current = true;
		},

		p: function update(changed, new_ctx) {
			ctx = new_ctx;
			var comment_changes = {};
			if (changed.comments) comment_changes.comment = ctx.comment;
			if (changed.slug) comment_changes.slug = ctx.slug;
			if (changed.user) comment_changes.user = ctx.user;
			comment.$set(comment_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(comment.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(comment.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(first);
			}

			destroy_component(comment, detaching);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block.name, type: "each", source: "(24:1) {#each comments as comment, i (comment.id)}", ctx });
	return block;
}

function create_fragment$3(ctx) {
	var div, current_block_type_index, if_block, t, each_blocks = [], each_1_lookup = new Map(), current;

	var if_block_creators = [
		create_if_block$2,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(changed, ctx) {
		if (ctx.user) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(null, ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	let each_value = ctx.comments;

	const get_key = ctx => ctx.comment.id;

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			div = element("div");
			if_block.c();
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			if_block.l(div_nodes);
			t = claim_space(div_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(div, "class", "col-xs-12 col-md-8 offset-md-2");
			add_location(div, file$3, 11, 0, 253);
		},

		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			append_dev(div, t);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(changed, ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});
				check_outros();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				transition_in(if_block, 1);
				if_block.m(div, t);
			}

			const each_value = ctx.comments;

			group_outros();
			each_blocks = update_keyed_each(each_blocks, changed, get_key, 1, ctx, each_value, each_1_lookup, div, outro_and_destroy_block, create_each_block, null, get_each_context);
			check_outros();
		},

		i: function intro(local) {
			if (current) return;
			transition_in(if_block);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},

		o: function outro(local) {
			transition_out(if_block);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(div);
			}

			if_blocks[current_block_type_index].d();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$3.name, type: "component", source: "", ctx });
	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	

	let { comments, errors, slug, user } = $$props;

	const writable_props = ['comments', 'errors', 'slug', 'user'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<CommentContainer> was created with unknown prop '${key}'`);
	});

	const commented_handler = ({ detail }) => $$invalidate('comments', comments = [detail.comment, ...comments]);

	const deleted_handler = ({ i }) => $$invalidate('comments', comments = comments.filter((_, index) => i !== index));

	$$self.$set = $$props => {
		if ('comments' in $$props) $$invalidate('comments', comments = $$props.comments);
		if ('errors' in $$props) $$invalidate('errors', errors = $$props.errors);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
	};

	$$self.$capture_state = () => {
		return { comments, errors, slug, user };
	};

	$$self.$inject_state = $$props => {
		if ('comments' in $$props) $$invalidate('comments', comments = $$props.comments);
		if ('errors' in $$props) $$invalidate('errors', errors = $$props.errors);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('user' in $$props) $$invalidate('user', user = $$props.user);
	};

	return {
		comments,
		errors,
		slug,
		user,
		commented_handler,
		deleted_handler
	};
}

class CommentContainer extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, ["comments", "errors", "slug", "user"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "CommentContainer", options, id: create_fragment$3.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.comments === undefined && !('comments' in props)) {
			console.warn("<CommentContainer> was created without expected prop 'comments'");
		}
		if (ctx.errors === undefined && !('errors' in props)) {
			console.warn("<CommentContainer> was created without expected prop 'errors'");
		}
		if (ctx.slug === undefined && !('slug' in props)) {
			console.warn("<CommentContainer> was created without expected prop 'slug'");
		}
		if (ctx.user === undefined && !('user' in props)) {
			console.warn("<CommentContainer> was created without expected prop 'user'");
		}
	}

	get comments() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set comments(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get errors() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set errors(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get user() {
		throw new Error("<CommentContainer>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set user(value) {
		throw new Error("<CommentContainer>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/article/[slug].svelte generated by Svelte v3.12.1 */

const file$4 = "src/routes/article/[slug].svelte";

function get_each_context$1(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.tag = list[i];
	return child_ctx;
}

// (54:5) {#each article.tagList as tag}
function create_each_block$1(ctx) {
	var li, t0_value = ctx.tag + "", t0, t1;

	const block = {
		c: function create() {
			li = element("li");
			t0 = text(t0_value);
			t1 = space();
			this.h();
		},

		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true }, false);
			var li_nodes = children(li);

			t0 = claim_text(li_nodes, t0_value);
			t1 = claim_space(li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			attr_dev(li, "class", "tag-default tag-pill tag-outline");
			add_location(li, file$4, 54, 6, 1195);
		},

		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t0);
			append_dev(li, t1);
		},

		p: function update(changed, ctx) {
			if ((changed.article) && t0_value !== (t0_value = ctx.tag + "")) {
				set_data_dev(t0, t0_value);
			}
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(li);
			}
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_each_block$1.name, type: "each", source: "(54:5) {#each article.tagList as tag}", ctx });
	return block;
}

function create_fragment$4(ctx) {
	var title_value, t0, div8, div1, div0, h1, t1_value = ctx.article.title + "", t1, t2, t3, div7, div4, div3, div2, t4, ul, t5, hr, t6, div5, t7, div6, current;

	document.title = title_value = ctx.article.title;

	var articlemeta = new ArticleMeta({
		props: { article: ctx.article, user: ctx.$session.user },
		$$inline: true
	});

	let each_value = ctx.article.tagList;

	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
	}

	var commentcontainer = new CommentContainer({
		props: {
		slug: ctx.slug,
		comments: ctx.comments,
		user: ctx.$session.user,
		errors: ctx.commentErrors
	},
		$$inline: true
	});

	const block = {
		c: function create() {
			t0 = space();
			div8 = element("div");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			articlemeta.$$.fragment.c();
			t3 = space();
			div7 = element("div");
			div4 = element("div");
			div3 = element("div");
			div2 = element("div");
			t4 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t5 = space();
			hr = element("hr");
			t6 = space();
			div5 = element("div");
			t7 = space();
			div6 = element("div");
			commentcontainer.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_space(nodes);

			div8 = claim_element(nodes, "DIV", { class: true }, false);
			var div8_nodes = children(div8);

			div1 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			h1 = claim_element(div0_nodes, "H1", {}, false);
			var h1_nodes = children(h1);

			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			articlemeta.$$.fragment.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div8_nodes);

			div7 = claim_element(div8_nodes, "DIV", { class: true }, false);
			var div7_nodes = children(div7);

			div4 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div4_nodes = children(div4);

			div3 = claim_element(div4_nodes, "DIV", { class: true }, false);
			var div3_nodes = children(div3);

			div2 = claim_element(div3_nodes, "DIV", {}, false);
			var div2_nodes = children(div2);

			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);

			ul = claim_element(div3_nodes, "UL", { class: true }, false);
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t5 = claim_space(div7_nodes);

			hr = claim_element(div7_nodes, "HR", {}, false);
			var hr_nodes = children(hr);

			hr_nodes.forEach(detach_dev);
			t6 = claim_space(div7_nodes);

			div5 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div5_nodes = children(div5);

			div5_nodes.forEach(detach_dev);
			t7 = claim_space(div7_nodes);

			div6 = claim_element(div7_nodes, "DIV", { class: true }, false);
			var div6_nodes = children(div6);

			commentcontainer.$$.fragment.l(div6_nodes);
			div6_nodes.forEach(detach_dev);
			div7_nodes.forEach(detach_dev);
			div8_nodes.forEach(detach_dev);
			this.h();
		},

		h: function hydrate() {
			add_location(h1, file$4, 42, 3, 911);
			attr_dev(div0, "class", "container");
			add_location(div0, file$4, 41, 2, 884);
			attr_dev(div1, "class", "banner");
			add_location(div1, file$4, 40, 1, 861);
			add_location(div2, file$4, 50, 4, 1100);
			attr_dev(ul, "class", "tag-list");
			add_location(ul, file$4, 52, 4, 1131);
			attr_dev(div3, "class", "col-xs-12");
			add_location(div3, file$4, 49, 3, 1072);
			attr_dev(div4, "class", "row article-content");
			add_location(div4, file$4, 48, 2, 1035);
			add_location(hr, file$4, 62, 2, 1311);
			attr_dev(div5, "class", "article-actions");
			add_location(div5, file$4, 64, 2, 1321);
			attr_dev(div6, "class", "row");
			add_location(div6, file$4, 66, 2, 1360);
			attr_dev(div7, "class", "container page");
			add_location(div7, file$4, 47, 1, 1004);
			attr_dev(div8, "class", "article-page");
			add_location(div8, file$4, 38, 0, 832);
		},

		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div8, anchor);
			append_dev(div8, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t1);
			append_dev(div0, t2);
			mount_component(articlemeta, div0, null);
			append_dev(div8, t3);
			append_dev(div8, div7);
			append_dev(div7, div4);
			append_dev(div4, div3);
			append_dev(div3, div2);
			div2.innerHTML = ctx.markup;
			append_dev(div3, t4);
			append_dev(div3, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			append_dev(div7, t5);
			append_dev(div7, hr);
			append_dev(div7, t6);
			append_dev(div7, div5);
			append_dev(div7, t7);
			append_dev(div7, div6);
			mount_component(commentcontainer, div6, null);
			current = true;
		},

		p: function update(changed, ctx) {
			if ((!current || changed.article) && title_value !== (title_value = ctx.article.title)) {
				document.title = title_value;
			}

			if ((!current || changed.article) && t1_value !== (t1_value = ctx.article.title + "")) {
				set_data_dev(t1, t1_value);
			}

			var articlemeta_changes = {};
			if (changed.article) articlemeta_changes.article = ctx.article;
			if (changed.$session) articlemeta_changes.user = ctx.$session.user;
			articlemeta.$set(articlemeta_changes);

			if (!current || changed.markup) {
				div2.innerHTML = ctx.markup;
			}

			if (changed.article) {
				each_value = ctx.article.tagList;

				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context$1(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block$1(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}

			var commentcontainer_changes = {};
			if (changed.slug) commentcontainer_changes.slug = ctx.slug;
			if (changed.comments) commentcontainer_changes.comments = ctx.comments;
			if (changed.$session) commentcontainer_changes.user = ctx.$session.user;
			commentcontainer.$set(commentcontainer_changes);
		},

		i: function intro(local) {
			if (current) return;
			transition_in(articlemeta.$$.fragment, local);

			transition_in(commentcontainer.$$.fragment, local);

			current = true;
		},

		o: function outro(local) {
			transition_out(articlemeta.$$.fragment, local);
			transition_out(commentcontainer.$$.fragment, local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach_dev(t0);
				detach_dev(div8);
			}

			destroy_component(articlemeta);

			destroy_each(each_blocks, detaching);

			destroy_component(commentcontainer);
		}
	};
	dispatch_dev("SvelteRegisterBlock", { block, id: create_fragment$4.name, type: "component", source: "", ctx });
	return block;
}

async function preload({ params }) {
	const { slug } = params;
	const { article } = await get(`articles/${params.slug}`, null);

	return { article, slug };
}

function instance$4($$self, $$props, $$invalidate) {
	let $session;

	

	let { article, slug } = $$props;

	const { session } = stores$1(); validate_store(session, 'session'); component_subscribe($$self, session, $$value => { $session = $$value; $$invalidate('$session', $session); });

	let commentErrors, comments = [];

	onMount(() => {
		get(`articles/${slug}/comments`).then((res) => {
			$$invalidate('comments', comments = res.comments);
		});
	});

	const writable_props = ['article', 'slug'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Slug> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
	};

	$$self.$capture_state = () => {
		return { article, slug, commentErrors, comments, markup, $session };
	};

	$$self.$inject_state = $$props => {
		if ('article' in $$props) $$invalidate('article', article = $$props.article);
		if ('slug' in $$props) $$invalidate('slug', slug = $$props.slug);
		if ('commentErrors' in $$props) $$invalidate('commentErrors', commentErrors = $$props.commentErrors);
		if ('comments' in $$props) $$invalidate('comments', comments = $$props.comments);
		if ('markup' in $$props) $$invalidate('markup', markup = $$props.markup);
		if ('$session' in $$props) session.set($session);
	};

	let markup;

	$$self.$$.update = ($$dirty = { article: 1 }) => {
		if ($$dirty.article) { $$invalidate('markup', markup = marked(article.body)); }
	};

	return {
		article,
		slug,
		session,
		commentErrors,
		comments,
		markup,
		$session
	};
}

class Slug extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, ["article", "slug"]);
		dispatch_dev("SvelteRegisterComponent", { component: this, tagName: "Slug", options, id: create_fragment$4.name });

		const { ctx } = this.$$;
		const props = options.props || {};
		if (ctx.article === undefined && !('article' in props)) {
			console.warn("<Slug> was created without expected prop 'article'");
		}
		if (ctx.slug === undefined && !('slug' in props)) {
			console.warn("<Slug> was created without expected prop 'slug'");
		}
	}

	get article() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set article(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get slug() {
		throw new Error("<Slug>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set slug(value) {
		throw new Error("<Slug>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Slug;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLjMyMjEyYThiLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWFya2VkL2xpYi9tYXJrZWQuanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2FydGljbGUvX0FydGljbGVNZXRhLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXJ0aWNsZS9fQ29tbWVudElucHV0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXJ0aWNsZS9fQ29tbWVudC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2FydGljbGUvX0NvbW1lbnRDb250YWluZXIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9hcnRpY2xlL1tzbHVnXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBtYXJrZWQgLSBhIG1hcmtkb3duIHBhcnNlclxuICogQ29weXJpZ2h0IChjKSAyMDExLTIwMTgsIENocmlzdG9waGVyIEplZmZyZXkuIChNSVQgTGljZW5zZWQpXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFya2VkanMvbWFya2VkXG4gKi9cblxuOyhmdW5jdGlvbihyb290KSB7XG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQmxvY2stTGV2ZWwgR3JhbW1hclxuICovXG5cbnZhciBibG9jayA9IHtcbiAgbmV3bGluZTogL15cXG4rLyxcbiAgY29kZTogL14oIHs0fVteXFxuXStcXG4qKSsvLFxuICBmZW5jZXM6IG5vb3AsXG4gIGhyOiAvXiB7MCwzfSgoPzotICopezMsfXwoPzpfICopezMsfXwoPzpcXCogKil7Myx9KSg/Olxcbit8JCkvLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKihbXlxcbl0rPykgKig/OiMrICopPyg/Olxcbit8JCkvLFxuICBucHRhYmxlOiBub29wLFxuICBibG9ja3F1b3RlOiAvXiggezAsM30+ID8ocGFyYWdyYXBofFteXFxuXSopKD86XFxufCQpKSsvLFxuICBsaXN0OiAvXiggezAsM30pKGJ1bGwpIFtcXHNcXFNdKz8oPzpocnxkZWZ8XFxuezIsfSg/ISApKD8hXFwxYnVsbCApXFxuKnxcXHMqJCkvLFxuICBodG1sOiAnXiB7MCwzfSg/OicgLy8gb3B0aW9uYWwgaW5kZW50YXRpb25cbiAgICArICc8KHNjcmlwdHxwcmV8c3R5bGUpW1xcXFxzPl1bXFxcXHNcXFxcU10qPyg/OjwvXFxcXDE+W15cXFxcbl0qXFxcXG4rfCQpJyAvLyAoMSlcbiAgICArICd8Y29tbWVudFteXFxcXG5dKihcXFxcbit8JCknIC8vICgyKVxuICAgICsgJ3w8XFxcXD9bXFxcXHNcXFxcU10qP1xcXFw/PlxcXFxuKicgLy8gKDMpXG4gICAgKyAnfDwhW0EtWl1bXFxcXHNcXFxcU10qPz5cXFxcbionIC8vICg0KVxuICAgICsgJ3w8IVxcXFxbQ0RBVEFcXFxcW1tcXFxcc1xcXFxTXSo/XFxcXF1cXFxcXT5cXFxcbionIC8vICg1KVxuICAgICsgJ3w8Lz8odGFnKSg/OiArfFxcXFxufC8/PilbXFxcXHNcXFxcU10qPyg/OlxcXFxuezIsfXwkKScgLy8gKDYpXG4gICAgKyAnfDwoPyFzY3JpcHR8cHJlfHN0eWxlKShbYS16XVtcXFxcdy1dKikoPzphdHRyaWJ1dGUpKj8gKi8/Pig/PVsgXFxcXHRdKig/OlxcXFxufCQpKVtcXFxcc1xcXFxTXSo/KD86XFxcXG57Mix9fCQpJyAvLyAoNykgb3BlbiB0YWdcbiAgICArICd8PC8oPyFzY3JpcHR8cHJlfHN0eWxlKVthLXpdW1xcXFx3LV0qXFxcXHMqPig/PVsgXFxcXHRdKig/OlxcXFxufCQpKVtcXFxcc1xcXFxTXSo/KD86XFxcXG57Mix9fCQpJyAvLyAoNykgY2xvc2luZyB0YWdcbiAgICArICcpJyxcbiAgZGVmOiAvXiB7MCwzfVxcWyhsYWJlbClcXF06ICpcXG4/ICo8PyhbXlxccz5dKyk+Pyg/Oig/OiArXFxuPyAqfCAqXFxuICopKHRpdGxlKSk/ICooPzpcXG4rfCQpLyxcbiAgdGFibGU6IG5vb3AsXG4gIGxoZWFkaW5nOiAvXihbXlxcbl0rKVxcbiAqKD18LSl7Mix9ICooPzpcXG4rfCQpLyxcbiAgcGFyYWdyYXBoOiAvXihbXlxcbl0rKD86XFxuKD8haHJ8aGVhZGluZ3xsaGVhZGluZ3wgezAsM30+fDxcXC8/KD86dGFnKSg/OiArfFxcbnxcXC8/Pil8PCg/OnNjcmlwdHxwcmV8c3R5bGV8IS0tKSlbXlxcbl0rKSopLyxcbiAgdGV4dDogL15bXlxcbl0rL1xufTtcblxuYmxvY2suX2xhYmVsID0gLyg/IVxccypcXF0pKD86XFxcXFtcXFtcXF1dfFteXFxbXFxdXSkrLztcbmJsb2NrLl90aXRsZSA9IC8oPzpcIig/OlxcXFxcIj98W15cIlxcXFxdKSpcInwnW14nXFxuXSooPzpcXG5bXidcXG5dKykqXFxuPyd8XFwoW14oKV0qXFwpKS87XG5ibG9jay5kZWYgPSBlZGl0KGJsb2NrLmRlZilcbiAgLnJlcGxhY2UoJ2xhYmVsJywgYmxvY2suX2xhYmVsKVxuICAucmVwbGFjZSgndGl0bGUnLCBibG9jay5fdGl0bGUpXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5idWxsZXQgPSAvKD86WyorLV18XFxkezEsOX1cXC4pLztcbmJsb2NrLml0ZW0gPSAvXiggKikoYnVsbCkgP1teXFxuXSooPzpcXG4oPyFcXDFidWxsID8pW15cXG5dKikqLztcbmJsb2NrLml0ZW0gPSBlZGl0KGJsb2NrLml0ZW0sICdnbScpXG4gIC5yZXBsYWNlKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLmxpc3QgPSBlZGl0KGJsb2NrLmxpc3QpXG4gIC5yZXBsYWNlKC9idWxsL2csIGJsb2NrLmJ1bGxldClcbiAgLnJlcGxhY2UoJ2hyJywgJ1xcXFxuKyg/PVxcXFwxPyg/Oig/Oi0gKil7Myx9fCg/Ol8gKil7Myx9fCg/OlxcXFwqICopezMsfSkoPzpcXFxcbit8JCkpJylcbiAgLnJlcGxhY2UoJ2RlZicsICdcXFxcbisoPz0nICsgYmxvY2suZGVmLnNvdXJjZSArICcpJylcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLl90YWcgPSAnYWRkcmVzc3xhcnRpY2xlfGFzaWRlfGJhc2V8YmFzZWZvbnR8YmxvY2txdW90ZXxib2R5fGNhcHRpb24nXG4gICsgJ3xjZW50ZXJ8Y29sfGNvbGdyb3VwfGRkfGRldGFpbHN8ZGlhbG9nfGRpcnxkaXZ8ZGx8ZHR8ZmllbGRzZXR8ZmlnY2FwdGlvbidcbiAgKyAnfGZpZ3VyZXxmb290ZXJ8Zm9ybXxmcmFtZXxmcmFtZXNldHxoWzEtNl18aGVhZHxoZWFkZXJ8aHJ8aHRtbHxpZnJhbWUnXG4gICsgJ3xsZWdlbmR8bGl8bGlua3xtYWlufG1lbnV8bWVudWl0ZW18bWV0YXxuYXZ8bm9mcmFtZXN8b2x8b3B0Z3JvdXB8b3B0aW9uJ1xuICArICd8cHxwYXJhbXxzZWN0aW9ufHNvdXJjZXxzdW1tYXJ5fHRhYmxlfHRib2R5fHRkfHRmb290fHRofHRoZWFkfHRpdGxlfHRyJ1xuICArICd8dHJhY2t8dWwnO1xuYmxvY2suX2NvbW1lbnQgPSAvPCEtLSg/IS0/PilbXFxzXFxTXSo/LS0+LztcbmJsb2NrLmh0bWwgPSBlZGl0KGJsb2NrLmh0bWwsICdpJylcbiAgLnJlcGxhY2UoJ2NvbW1lbnQnLCBibG9jay5fY29tbWVudClcbiAgLnJlcGxhY2UoJ3RhZycsIGJsb2NrLl90YWcpXG4gIC5yZXBsYWNlKCdhdHRyaWJ1dGUnLCAvICtbYS16QS1aOl9dW1xcdy46LV0qKD86ICo9ICpcIlteXCJcXG5dKlwifCAqPSAqJ1teJ1xcbl0qJ3wgKj0gKlteXFxzXCInPTw+YF0rKT8vKVxuICAuZ2V0UmVnZXgoKTtcblxuYmxvY2sucGFyYWdyYXBoID0gZWRpdChibG9jay5wYXJhZ3JhcGgpXG4gIC5yZXBsYWNlKCdocicsIGJsb2NrLmhyKVxuICAucmVwbGFjZSgnaGVhZGluZycsIGJsb2NrLmhlYWRpbmcpXG4gIC5yZXBsYWNlKCdsaGVhZGluZycsIGJsb2NrLmxoZWFkaW5nKVxuICAucmVwbGFjZSgndGFnJywgYmxvY2suX3RhZykgLy8gcGFycyBjYW4gYmUgaW50ZXJydXB0ZWQgYnkgdHlwZSAoNikgaHRtbCBibG9ja3NcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLmJsb2NrcXVvdGUgPSBlZGl0KGJsb2NrLmJsb2NrcXVvdGUpXG4gIC5yZXBsYWNlKCdwYXJhZ3JhcGgnLCBibG9jay5wYXJhZ3JhcGgpXG4gIC5nZXRSZWdleCgpO1xuXG4vKipcbiAqIE5vcm1hbCBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2subm9ybWFsID0gbWVyZ2Uoe30sIGJsb2NrKTtcblxuLyoqXG4gKiBHRk0gQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLmdmbSA9IG1lcmdlKHt9LCBibG9jay5ub3JtYWwsIHtcbiAgZmVuY2VzOiAvXiB7MCwzfShgezMsfXx+ezMsfSkoW15gXFxuXSopXFxuKD86fChbXFxzXFxTXSo/KVxcbikoPzogezAsM31cXDFbfmBdKiAqKD86XFxuK3wkKXwkKS8sXG4gIHBhcmFncmFwaDogL14vLFxuICBoZWFkaW5nOiAvXiAqKCN7MSw2fSkgKyhbXlxcbl0rPykgKiMqICooPzpcXG4rfCQpL1xufSk7XG5cbmJsb2NrLmdmbS5wYXJhZ3JhcGggPSBlZGl0KGJsb2NrLnBhcmFncmFwaClcbiAgLnJlcGxhY2UoJyg/IScsICcoPyEnXG4gICAgKyBibG9jay5nZm0uZmVuY2VzLnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMicpICsgJ3wnXG4gICAgKyBibG9jay5saXN0LnNvdXJjZS5yZXBsYWNlKCdcXFxcMScsICdcXFxcMycpICsgJ3wnKVxuICAuZ2V0UmVnZXgoKTtcblxuLyoqXG4gKiBHRk0gKyBUYWJsZXMgQmxvY2sgR3JhbW1hclxuICovXG5cbmJsb2NrLnRhYmxlcyA9IG1lcmdlKHt9LCBibG9jay5nZm0sIHtcbiAgbnB0YWJsZTogL14gKihbXnxcXG4gXS4qXFx8LiopXFxuICooWy06XSsgKlxcfFstfCA6XSopKD86XFxuKCg/Oi4qW14+XFxuIF0uKig/OlxcbnwkKSkqKVxcbip8JCkvLFxuICB0YWJsZTogL14gKlxcfCguKylcXG4gKlxcfD8oICpbLTpdK1stfCA6XSopKD86XFxuKCg/OiAqW14+XFxuIF0uKig/OlxcbnwkKSkqKVxcbip8JCkvXG59KTtcblxuLyoqXG4gKiBQZWRhbnRpYyBncmFtbWFyXG4gKi9cblxuYmxvY2sucGVkYW50aWMgPSBtZXJnZSh7fSwgYmxvY2subm9ybWFsLCB7XG4gIGh0bWw6IGVkaXQoXG4gICAgJ14gKig/OmNvbW1lbnQgKig/OlxcXFxufFxcXFxzKiQpJ1xuICAgICsgJ3w8KHRhZylbXFxcXHNcXFxcU10rPzwvXFxcXDE+ICooPzpcXFxcbnsyLH18XFxcXHMqJCknIC8vIGNsb3NlZCB0YWdcbiAgICArICd8PHRhZyg/OlwiW15cIl0qXCJ8XFwnW15cXCddKlxcJ3xcXFxcc1teXFwnXCIvPlxcXFxzXSopKj8vPz4gKig/OlxcXFxuezIsfXxcXFxccyokKSknKVxuICAgIC5yZXBsYWNlKCdjb21tZW50JywgYmxvY2suX2NvbW1lbnQpXG4gICAgLnJlcGxhY2UoL3RhZy9nLCAnKD8hKD86J1xuICAgICAgKyAnYXxlbXxzdHJvbmd8c21hbGx8c3xjaXRlfHF8ZGZufGFiYnJ8ZGF0YXx0aW1lfGNvZGV8dmFyfHNhbXB8a2JkfHN1YidcbiAgICAgICsgJ3xzdXB8aXxifHV8bWFya3xydWJ5fHJ0fHJwfGJkaXxiZG98c3Bhbnxicnx3YnJ8aW5zfGRlbHxpbWcpJ1xuICAgICAgKyAnXFxcXGIpXFxcXHcrKD8hOnxbXlxcXFx3XFxcXHNAXSpAKVxcXFxiJylcbiAgICAuZ2V0UmVnZXgoKSxcbiAgZGVmOiAvXiAqXFxbKFteXFxdXSspXFxdOiAqPD8oW15cXHM+XSspPj8oPzogKyhbXCIoXVteXFxuXStbXCIpXSkpPyAqKD86XFxuK3wkKS9cbn0pO1xuXG4vKipcbiAqIEJsb2NrIExleGVyXG4gKi9cblxuZnVuY3Rpb24gTGV4ZXIob3B0aW9ucykge1xuICB0aGlzLnRva2VucyA9IFtdO1xuICB0aGlzLnRva2Vucy5saW5rcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLnJ1bGVzID0gYmxvY2subm9ybWFsO1xuXG4gIGlmICh0aGlzLm9wdGlvbnMucGVkYW50aWMpIHtcbiAgICB0aGlzLnJ1bGVzID0gYmxvY2sucGVkYW50aWM7XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudGFibGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2sudGFibGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gYmxvY2suZ2ZtO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEV4cG9zZSBCbG9jayBSdWxlc1xuICovXG5cbkxleGVyLnJ1bGVzID0gYmxvY2s7XG5cbi8qKlxuICogU3RhdGljIExleCBNZXRob2RcbiAqL1xuXG5MZXhlci5sZXggPSBmdW5jdGlvbihzcmMsIG9wdGlvbnMpIHtcbiAgdmFyIGxleGVyID0gbmV3IExleGVyKG9wdGlvbnMpO1xuICByZXR1cm4gbGV4ZXIubGV4KHNyYyk7XG59O1xuXG4vKipcbiAqIFByZXByb2Nlc3NpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUubGV4ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHNyYyA9IHNyY1xuICAgIC5yZXBsYWNlKC9cXHJcXG58XFxyL2csICdcXG4nKVxuICAgIC5yZXBsYWNlKC9cXHQvZywgJyAgICAnKVxuICAgIC5yZXBsYWNlKC9cXHUwMGEwL2csICcgJylcbiAgICAucmVwbGFjZSgvXFx1MjQyNC9nLCAnXFxuJyk7XG5cbiAgcmV0dXJuIHRoaXMudG9rZW4oc3JjLCB0cnVlKTtcbn07XG5cbi8qKlxuICogTGV4aW5nXG4gKi9cblxuTGV4ZXIucHJvdG90eXBlLnRva2VuID0gZnVuY3Rpb24oc3JjLCB0b3ApIHtcbiAgc3JjID0gc3JjLnJlcGxhY2UoL14gKyQvZ20sICcnKTtcbiAgdmFyIG5leHQsXG4gICAgICBsb29zZSxcbiAgICAgIGNhcCxcbiAgICAgIGJ1bGwsXG4gICAgICBiLFxuICAgICAgaXRlbSxcbiAgICAgIGxpc3RTdGFydCxcbiAgICAgIGxpc3RJdGVtcyxcbiAgICAgIHQsXG4gICAgICBzcGFjZSxcbiAgICAgIGksXG4gICAgICB0YWcsXG4gICAgICBsLFxuICAgICAgaXNvcmRlcmVkLFxuICAgICAgaXN0YXNrLFxuICAgICAgaXNjaGVja2VkO1xuXG4gIHdoaWxlIChzcmMpIHtcbiAgICAvLyBuZXdsaW5lXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubmV3bGluZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY2FwWzBdLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgdHlwZTogJ3NwYWNlJ1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb2RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuY29kZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBjYXAgPSBjYXBbMF0ucmVwbGFjZSgvXiB7NH0vZ20sICcnKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIHRleHQ6ICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgICA/IHJ0cmltKGNhcCwgJ1xcbicpXG4gICAgICAgICAgOiBjYXBcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZmVuY2VzIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZmVuY2VzLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnY29kZScsXG4gICAgICAgIGxhbmc6IGNhcFsyXSA/IGNhcFsyXS50cmltKCkgOiBjYXBbMl0sXG4gICAgICAgIHRleHQ6IGNhcFszXSB8fCAnJ1xuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBoZWFkaW5nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaGVhZGluZy5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hlYWRpbmcnLFxuICAgICAgICBkZXB0aDogY2FwWzFdLmxlbmd0aCxcbiAgICAgICAgdGV4dDogY2FwWzJdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIG5vIGxlYWRpbmcgcGlwZSAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLm5wdGFibGUuZXhlYyhzcmMpKSB7XG4gICAgICBpdGVtID0ge1xuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBoZWFkZXI6IHNwbGl0Q2VsbHMoY2FwWzFdLnJlcGxhY2UoL14gKnwgKlxcfCAqJC9nLCAnJykpLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10gPyBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJykgOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZW0uaGVhZGVyLmxlbmd0aCA9PT0gaXRlbS5hbGlnbi5sZW5ndGgpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5hbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGl0ZW0uY2VsbHNbaV0gPSBzcGxpdENlbGxzKGl0ZW0uY2VsbHNbaV0sIGl0ZW0uaGVhZGVyLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGhyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdocidcbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYmxvY2txdW90ZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJsb2NrcXVvdGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfc3RhcnQnXG4gICAgICB9KTtcblxuICAgICAgY2FwID0gY2FwWzBdLnJlcGxhY2UoL14gKj4gPy9nbSwgJycpO1xuXG4gICAgICAvLyBQYXNzIGB0b3BgIHRvIGtlZXAgdGhlIGN1cnJlbnRcbiAgICAgIC8vIFwidG9wbGV2ZWxcIiBzdGF0ZS4gVGhpcyBpcyBleGFjdGx5XG4gICAgICAvLyBob3cgbWFya2Rvd24ucGwgd29ya3MuXG4gICAgICB0aGlzLnRva2VuKGNhcCwgdG9wKTtcblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdibG9ja3F1b3RlX2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBsaXN0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGlzdC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBidWxsID0gY2FwWzJdO1xuICAgICAgaXNvcmRlcmVkID0gYnVsbC5sZW5ndGggPiAxO1xuXG4gICAgICBsaXN0U3RhcnQgPSB7XG4gICAgICAgIHR5cGU6ICdsaXN0X3N0YXJ0JyxcbiAgICAgICAgb3JkZXJlZDogaXNvcmRlcmVkLFxuICAgICAgICBzdGFydDogaXNvcmRlcmVkID8gK2J1bGwgOiAnJyxcbiAgICAgICAgbG9vc2U6IGZhbHNlXG4gICAgICB9O1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKGxpc3RTdGFydCk7XG5cbiAgICAgIC8vIEdldCBlYWNoIHRvcC1sZXZlbCBpdGVtLlxuICAgICAgY2FwID0gY2FwWzBdLm1hdGNoKHRoaXMucnVsZXMuaXRlbSk7XG5cbiAgICAgIGxpc3RJdGVtcyA9IFtdO1xuICAgICAgbmV4dCA9IGZhbHNlO1xuICAgICAgbCA9IGNhcC5sZW5ndGg7XG4gICAgICBpID0gMDtcblxuICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGNhcFtpXTtcblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGxpc3QgaXRlbSdzIGJ1bGxldFxuICAgICAgICAvLyBzbyBpdCBpcyBzZWVuIGFzIHRoZSBuZXh0IHRva2VuLlxuICAgICAgICBzcGFjZSA9IGl0ZW0ubGVuZ3RoO1xuICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC9eICooWyorLV18XFxkK1xcLikgKi8sICcnKTtcblxuICAgICAgICAvLyBPdXRkZW50IHdoYXRldmVyIHRoZVxuICAgICAgICAvLyBsaXN0IGl0ZW0gY29udGFpbnMuIEhhY2t5LlxuICAgICAgICBpZiAofml0ZW0uaW5kZXhPZignXFxuICcpKSB7XG4gICAgICAgICAgc3BhY2UgLT0gaXRlbS5sZW5ndGg7XG4gICAgICAgICAgaXRlbSA9ICF0aGlzLm9wdGlvbnMucGVkYW50aWNcbiAgICAgICAgICAgID8gaXRlbS5yZXBsYWNlKG5ldyBSZWdFeHAoJ14gezEsJyArIHNwYWNlICsgJ30nLCAnZ20nKSwgJycpXG4gICAgICAgICAgICA6IGl0ZW0ucmVwbGFjZSgvXiB7MSw0fS9nbSwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgdGhlIG5leHQgbGlzdCBpdGVtIGJlbG9uZ3MgaGVyZS5cbiAgICAgICAgLy8gQmFja3BlZGFsIGlmIGl0IGRvZXMgbm90IGJlbG9uZyBpbiB0aGlzIGxpc3QuXG4gICAgICAgIGlmIChpICE9PSBsIC0gMSkge1xuICAgICAgICAgIGIgPSBibG9jay5idWxsZXQuZXhlYyhjYXBbaSArIDFdKVswXTtcbiAgICAgICAgICBpZiAoYnVsbC5sZW5ndGggPiAxID8gYi5sZW5ndGggPT09IDFcbiAgICAgICAgICAgIDogKGIubGVuZ3RoID4gMSB8fCAodGhpcy5vcHRpb25zLnNtYXJ0TGlzdHMgJiYgYiAhPT0gYnVsbCkpKSB7XG4gICAgICAgICAgICBzcmMgPSBjYXAuc2xpY2UoaSArIDEpLmpvaW4oJ1xcbicpICsgc3JjO1xuICAgICAgICAgICAgaSA9IGwgLSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVybWluZSB3aGV0aGVyIGl0ZW0gaXMgbG9vc2Ugb3Igbm90LlxuICAgICAgICAvLyBVc2U6IC8oXnxcXG4pKD8hIClbXlxcbl0rXFxuXFxuKD8hXFxzKiQpL1xuICAgICAgICAvLyBmb3IgZGlzY291bnQgYmVoYXZpb3IuXG4gICAgICAgIGxvb3NlID0gbmV4dCB8fCAvXFxuXFxuKD8hXFxzKiQpLy50ZXN0KGl0ZW0pO1xuICAgICAgICBpZiAoaSAhPT0gbCAtIDEpIHtcbiAgICAgICAgICBuZXh0ID0gaXRlbS5jaGFyQXQoaXRlbS5sZW5ndGggLSAxKSA9PT0gJ1xcbic7XG4gICAgICAgICAgaWYgKCFsb29zZSkgbG9vc2UgPSBuZXh0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvb3NlKSB7XG4gICAgICAgICAgbGlzdFN0YXJ0Lmxvb3NlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGZvciB0YXNrIGxpc3QgaXRlbXNcbiAgICAgICAgaXN0YXNrID0gL15cXFtbIHhYXVxcXSAvLnRlc3QoaXRlbSk7XG4gICAgICAgIGlzY2hlY2tlZCA9IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKGlzdGFzaykge1xuICAgICAgICAgIGlzY2hlY2tlZCA9IGl0ZW1bMV0gIT09ICcgJztcbiAgICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKC9eXFxbWyB4WF1cXF0gKy8sICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHQgPSB7XG4gICAgICAgICAgdHlwZTogJ2xpc3RfaXRlbV9zdGFydCcsXG4gICAgICAgICAgdGFzazogaXN0YXNrLFxuICAgICAgICAgIGNoZWNrZWQ6IGlzY2hlY2tlZCxcbiAgICAgICAgICBsb29zZTogbG9vc2VcbiAgICAgICAgfTtcblxuICAgICAgICBsaXN0SXRlbXMucHVzaCh0KTtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh0KTtcblxuICAgICAgICAvLyBSZWN1cnNlLlxuICAgICAgICB0aGlzLnRva2VuKGl0ZW0sIGZhbHNlKTtcblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnbGlzdF9pdGVtX2VuZCdcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChsaXN0U3RhcnQubG9vc2UpIHtcbiAgICAgICAgbCA9IGxpc3RJdGVtcy5sZW5ndGg7XG4gICAgICAgIGkgPSAwO1xuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGxpc3RJdGVtc1tpXS5sb29zZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdsaXN0X2VuZCdcbiAgICAgIH0pO1xuXG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBodG1sXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuaHRtbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgICAgPyAncGFyYWdyYXBoJ1xuICAgICAgICAgIDogJ2h0bWwnLFxuICAgICAgICBwcmU6ICF0aGlzLm9wdGlvbnMuc2FuaXRpemVyXG4gICAgICAgICAgJiYgKGNhcFsxXSA9PT0gJ3ByZScgfHwgY2FwWzFdID09PSAnc2NyaXB0JyB8fCBjYXBbMV0gPT09ICdzdHlsZScpLFxuICAgICAgICB0ZXh0OiBjYXBbMF1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZGVmXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy5kZWYuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChjYXBbM10pIGNhcFszXSA9IGNhcFszXS5zdWJzdHJpbmcoMSwgY2FwWzNdLmxlbmd0aCAtIDEpO1xuICAgICAgdGFnID0gY2FwWzFdLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgaWYgKCF0aGlzLnRva2Vucy5saW5rc1t0YWddKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLmxpbmtzW3RhZ10gPSB7XG4gICAgICAgICAgaHJlZjogY2FwWzJdLFxuICAgICAgICAgIHRpdGxlOiBjYXBbM11cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGFibGUuZXhlYyhzcmMpKSB7XG4gICAgICBpdGVtID0ge1xuICAgICAgICB0eXBlOiAndGFibGUnLFxuICAgICAgICBoZWFkZXI6IHNwbGl0Q2VsbHMoY2FwWzFdLnJlcGxhY2UoL14gKnwgKlxcfCAqJC9nLCAnJykpLFxuICAgICAgICBhbGlnbjogY2FwWzJdLnJlcGxhY2UoL14gKnxcXHwgKiQvZywgJycpLnNwbGl0KC8gKlxcfCAqLyksXG4gICAgICAgIGNlbGxzOiBjYXBbM10gPyBjYXBbM10ucmVwbGFjZSgvXFxuJC8sICcnKS5zcGxpdCgnXFxuJykgOiBbXVxuICAgICAgfTtcblxuICAgICAgaWYgKGl0ZW0uaGVhZGVyLmxlbmd0aCA9PT0gaXRlbS5hbGlnbi5sZW5ndGgpIHtcbiAgICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5hbGlnbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGlmICgvXiAqLSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSs6ICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2NlbnRlcic7XG4gICAgICAgICAgfSBlbHNlIGlmICgvXiAqOi0rICokLy50ZXN0KGl0ZW0uYWxpZ25baV0pKSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gJ2xlZnQnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpdGVtLmFsaWduW2ldID0gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaXRlbS5jZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGl0ZW0uY2VsbHNbaV0gPSBzcGxpdENlbGxzKFxuICAgICAgICAgICAgaXRlbS5jZWxsc1tpXS5yZXBsYWNlKC9eICpcXHwgKnwgKlxcfCAqJC9nLCAnJyksXG4gICAgICAgICAgICBpdGVtLmhlYWRlci5sZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaChpdGVtKTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBsaGVhZGluZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxoZWFkaW5nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgICAgIGRlcHRoOiBjYXBbMl0gPT09ICc9JyA/IDEgOiAyLFxuICAgICAgICB0ZXh0OiBjYXBbMV1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdG9wLWxldmVsIHBhcmFncmFwaFxuICAgIGlmICh0b3AgJiYgKGNhcCA9IHRoaXMucnVsZXMucGFyYWdyYXBoLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ3BhcmFncmFwaCcsXG4gICAgICAgIHRleHQ6IGNhcFsxXS5jaGFyQXQoY2FwWzFdLmxlbmd0aCAtIDEpID09PSAnXFxuJ1xuICAgICAgICAgID8gY2FwWzFdLnNsaWNlKDAsIC0xKVxuICAgICAgICAgIDogY2FwWzFdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRleHRcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50ZXh0LmV4ZWMoc3JjKSkge1xuICAgICAgLy8gVG9wLWxldmVsIHNob3VsZCBuZXZlciByZWFjaCBoZXJlLlxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcy50b2tlbnM7XG59O1xuXG4vKipcbiAqIElubGluZS1MZXZlbCBHcmFtbWFyXG4gKi9cblxudmFyIGlubGluZSA9IHtcbiAgZXNjYXBlOiAvXlxcXFwoWyFcIiMkJSYnKCkqKyxcXC0uLzo7PD0+P0BcXFtcXF1cXFxcXl9ge3x9fl0pLyxcbiAgYXV0b2xpbms6IC9ePChzY2hlbWU6W15cXHNcXHgwMC1cXHgxZjw+XSp8ZW1haWwpPi8sXG4gIHVybDogbm9vcCxcbiAgdGFnOiAnXmNvbW1lbnQnXG4gICAgKyAnfF48L1thLXpBLVpdW1xcXFx3Oi1dKlxcXFxzKj4nIC8vIHNlbGYtY2xvc2luZyB0YWdcbiAgICArICd8XjxbYS16QS1aXVtcXFxcdy1dKig/OmF0dHJpYnV0ZSkqP1xcXFxzKi8/PicgLy8gb3BlbiB0YWdcbiAgICArICd8XjxcXFxcP1tcXFxcc1xcXFxTXSo/XFxcXD8+JyAvLyBwcm9jZXNzaW5nIGluc3RydWN0aW9uLCBlLmcuIDw/cGhwID8+XG4gICAgKyAnfF48IVthLXpBLVpdK1xcXFxzW1xcXFxzXFxcXFNdKj8+JyAvLyBkZWNsYXJhdGlvbiwgZS5nLiA8IURPQ1RZUEUgaHRtbD5cbiAgICArICd8XjwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPicsIC8vIENEQVRBIHNlY3Rpb25cbiAgbGluazogL14hP1xcWyhsYWJlbClcXF1cXChocmVmKD86XFxzKyh0aXRsZSkpP1xccypcXCkvLFxuICByZWZsaW5rOiAvXiE/XFxbKGxhYmVsKVxcXVxcWyg/IVxccypcXF0pKCg/OlxcXFxbXFxbXFxdXT98W15cXFtcXF1cXFxcXSkrKVxcXS8sXG4gIG5vbGluazogL14hP1xcWyg/IVxccypcXF0pKCg/OlxcW1teXFxbXFxdXSpcXF18XFxcXFtcXFtcXF1dfFteXFxbXFxdXSkqKVxcXSg/OlxcW1xcXSk/LyxcbiAgc3Ryb25nOiAvXl9fKFteXFxzX10pX18oPyFfKXxeXFwqXFwqKFteXFxzKl0pXFwqXFwqKD8hXFwqKXxeX18oW15cXHNdW1xcc1xcU10qP1teXFxzXSlfXyg/IV8pfF5cXCpcXCooW15cXHNdW1xcc1xcU10qP1teXFxzXSlcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyhbXlxcc19dKV8oPyFfKXxeXFwqKFteXFxzKlwiPFxcW10pXFwqKD8hXFwqKXxeXyhbXlxcc11bXFxzXFxTXSo/W15cXHNfXSlfKD8hX3xbXlxcc3B1bmN0dWF0aW9uXSl8Xl8oW15cXHNfXVtcXHNcXFNdKj9bXlxcc10pXyg/IV98W15cXHNwdW5jdHVhdGlvbl0pfF5cXCooW15cXHNcIjxcXFtdW1xcc1xcU10qP1teXFxzKl0pXFwqKD8hXFwqKXxeXFwqKFteXFxzKlwiPFxcW11bXFxzXFxTXSo/W15cXHNdKVxcKig/IVxcKikvLFxuICBjb2RlOiAvXihgKykoW15gXXxbXmBdW1xcc1xcU10qP1teYF0pXFwxKD8hYCkvLFxuICBicjogL14oIHsyLH18XFxcXClcXG4oPyFcXHMqJCkvLFxuICBkZWw6IG5vb3AsXG4gIHRleHQ6IC9eKGArfFteYF0pKD86W1xcc1xcU10qPyg/Oig/PVtcXFxcPCFcXFtgKl18XFxiX3wkKXxbXiBdKD89IHsyLH1cXG4pKXwoPz0gezIsfVxcbikpL1xufTtcblxuLy8gbGlzdCBvZiBwdW5jdHVhdGlvbiBtYXJrcyBmcm9tIGNvbW1vbiBtYXJrIHNwZWNcbi8vIHdpdGhvdXQgYCBhbmQgXSB0byB3b3JrYXJvdW5kIFJ1bGUgMTcgKGlubGluZSBjb2RlIGJsb2Nrcy9saW5rcylcbmlubGluZS5fcHVuY3R1YXRpb24gPSAnIVwiIyQlJlxcJygpKissXFxcXC0uLzo7PD0+P0BcXFxcW15fe3x9fic7XG5pbmxpbmUuZW0gPSBlZGl0KGlubGluZS5lbSkucmVwbGFjZSgvcHVuY3R1YXRpb24vZywgaW5saW5lLl9wdW5jdHVhdGlvbikuZ2V0UmVnZXgoKTtcblxuaW5saW5lLl9lc2NhcGVzID0gL1xcXFwoWyFcIiMkJSYnKCkqKyxcXC0uLzo7PD0+P0BcXFtcXF1cXFxcXl9ge3x9fl0pL2c7XG5cbmlubGluZS5fc2NoZW1lID0gL1thLXpBLVpdW2EtekEtWjAtOSsuLV17MSwzMX0vO1xuaW5saW5lLl9lbWFpbCA9IC9bYS16QS1aMC05LiEjJCUmJyorLz0/Xl9ge3x9fi1dKyhAKVthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPyg/OlxcLlthLXpBLVowLTldKD86W2EtekEtWjAtOS1dezAsNjF9W2EtekEtWjAtOV0pPykrKD8hWy1fXSkvO1xuaW5saW5lLmF1dG9saW5rID0gZWRpdChpbmxpbmUuYXV0b2xpbmspXG4gIC5yZXBsYWNlKCdzY2hlbWUnLCBpbmxpbmUuX3NjaGVtZSlcbiAgLnJlcGxhY2UoJ2VtYWlsJywgaW5saW5lLl9lbWFpbClcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5fYXR0cmlidXRlID0gL1xccytbYS16QS1aOl9dW1xcdy46LV0qKD86XFxzKj1cXHMqXCJbXlwiXSpcInxcXHMqPVxccyonW14nXSonfFxccyo9XFxzKlteXFxzXCInPTw+YF0rKT8vO1xuXG5pbmxpbmUudGFnID0gZWRpdChpbmxpbmUudGFnKVxuICAucmVwbGFjZSgnY29tbWVudCcsIGJsb2NrLl9jb21tZW50KVxuICAucmVwbGFjZSgnYXR0cmlidXRlJywgaW5saW5lLl9hdHRyaWJ1dGUpXG4gIC5nZXRSZWdleCgpO1xuXG5pbmxpbmUuX2xhYmVsID0gLyg/OlxcW1teXFxbXFxdXSpcXF18XFxcXFtcXFtcXF1dP3xgW15gXSpgfGAoPyFgKXxbXlxcW1xcXVxcXFxgXSkqPy87XG5pbmxpbmUuX2hyZWYgPSAvXFxzKig8KD86XFxcXFs8Pl0/fFteXFxzPD5cXFxcXSkqPnxbXlxcc1xceDAwLVxceDFmXSopLztcbmlubGluZS5fdGl0bGUgPSAvXCIoPzpcXFxcXCI/fFteXCJcXFxcXSkqXCJ8Jyg/OlxcXFwnP3xbXidcXFxcXSkqJ3xcXCgoPzpcXFxcXFwpP3xbXilcXFxcXSkqXFwpLztcblxuaW5saW5lLmxpbmsgPSBlZGl0KGlubGluZS5saW5rKVxuICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAucmVwbGFjZSgnaHJlZicsIGlubGluZS5faHJlZilcbiAgLnJlcGxhY2UoJ3RpdGxlJywgaW5saW5lLl90aXRsZSlcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5yZWZsaW5rID0gZWRpdChpbmxpbmUucmVmbGluaylcbiAgLnJlcGxhY2UoJ2xhYmVsJywgaW5saW5lLl9sYWJlbClcbiAgLmdldFJlZ2V4KCk7XG5cbi8qKlxuICogTm9ybWFsIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLm5vcm1hbCA9IG1lcmdlKHt9LCBpbmxpbmUpO1xuXG4vKipcbiAqIFBlZGFudGljIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLnBlZGFudGljID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgc3Ryb25nOiAvXl9fKD89XFxTKShbXFxzXFxTXSo/XFxTKV9fKD8hXyl8XlxcKlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCpcXCooPyFcXCopLyxcbiAgZW06IC9eXyg/PVxcUykoW1xcc1xcU10qP1xcUylfKD8hXyl8XlxcKig/PVxcUykoW1xcc1xcU10qP1xcUylcXCooPyFcXCopLyxcbiAgbGluazogZWRpdCgvXiE/XFxbKGxhYmVsKVxcXVxcKCguKj8pXFwpLylcbiAgICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAgIC5nZXRSZWdleCgpLFxuICByZWZsaW5rOiBlZGl0KC9eIT9cXFsobGFiZWwpXFxdXFxzKlxcWyhbXlxcXV0qKVxcXS8pXG4gICAgLnJlcGxhY2UoJ2xhYmVsJywgaW5saW5lLl9sYWJlbClcbiAgICAuZ2V0UmVnZXgoKVxufSk7XG5cbi8qKlxuICogR0ZNIElubGluZSBHcmFtbWFyXG4gKi9cblxuaW5saW5lLmdmbSA9IG1lcmdlKHt9LCBpbmxpbmUubm9ybWFsLCB7XG4gIGVzY2FwZTogZWRpdChpbmxpbmUuZXNjYXBlKS5yZXBsYWNlKCddKScsICd+fF0pJykuZ2V0UmVnZXgoKSxcbiAgX2V4dGVuZGVkX2VtYWlsOiAvW0EtWmEtejAtOS5fKy1dKyhAKVthLXpBLVowLTktX10rKD86XFwuW2EtekEtWjAtOS1fXSpbYS16QS1aMC05XSkrKD8hWy1fXSkvLFxuICB1cmw6IC9eKCg/OmZ0cHxodHRwcz8pOlxcL1xcL3x3d3dcXC4pKD86W2EtekEtWjAtOVxcLV0rXFwuPykrW15cXHM8XSp8XmVtYWlsLyxcbiAgX2JhY2twZWRhbDogLyg/OltePyEuLDo7Kl9+KCkmXSt8XFwoW14pXSpcXCl8Jig/IVthLXpBLVowLTldKzskKXxbPyEuLDo7Kl9+KV0rKD8hJCkpKy8sXG4gIGRlbDogL15+Kyg/PVxcUykoW1xcc1xcU10qP1xcUyl+Ky8sXG4gIHRleHQ6IC9eKGArfFteYF0pKD86W1xcc1xcU10qPyg/Oig/PVtcXFxcPCFcXFtgKn5dfFxcYl98aHR0cHM/OlxcL1xcL3xmdHA6XFwvXFwvfHd3d1xcLnwkKXxbXiBdKD89IHsyLH1cXG4pfFteYS16QS1aMC05LiEjJCUmJyorXFwvPT9fYHtcXHx9fi1dKD89W2EtekEtWjAtOS4hIyQlJicqK1xcLz0/X2B7XFx8fX4tXStAKSl8KD89IHsyLH1cXG58W2EtekEtWjAtOS4hIyQlJicqK1xcLz0/X2B7XFx8fX4tXStAKSkvXG59KTtcblxuaW5saW5lLmdmbS51cmwgPSBlZGl0KGlubGluZS5nZm0udXJsLCAnaScpXG4gIC5yZXBsYWNlKCdlbWFpbCcsIGlubGluZS5nZm0uX2V4dGVuZGVkX2VtYWlsKVxuICAuZ2V0UmVnZXgoKTtcbi8qKlxuICogR0ZNICsgTGluZSBCcmVha3MgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUuYnJlYWtzID0gbWVyZ2Uoe30sIGlubGluZS5nZm0sIHtcbiAgYnI6IGVkaXQoaW5saW5lLmJyKS5yZXBsYWNlKCd7Mix9JywgJyonKS5nZXRSZWdleCgpLFxuICB0ZXh0OiBlZGl0KGlubGluZS5nZm0udGV4dCkucmVwbGFjZSgvXFx7MixcXH0vZywgJyonKS5nZXRSZWdleCgpXG59KTtcblxuLyoqXG4gKiBJbmxpbmUgTGV4ZXIgJiBDb21waWxlclxuICovXG5cbmZ1bmN0aW9uIElubGluZUxleGVyKGxpbmtzLCBvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLmxpbmtzID0gbGlua3M7XG4gIHRoaXMucnVsZXMgPSBpbmxpbmUubm9ybWFsO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcigpO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG5cbiAgaWYgKCF0aGlzLmxpbmtzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUb2tlbnMgYXJyYXkgcmVxdWlyZXMgYSBgbGlua3NgIHByb3BlcnR5LicpO1xuICB9XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgIHRoaXMucnVsZXMgPSBpbmxpbmUucGVkYW50aWM7XG4gIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmdmbSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYnJlYWtzKSB7XG4gICAgICB0aGlzLnJ1bGVzID0gaW5saW5lLmJyZWFrcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcyA9IGlubGluZS5nZm07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIElubGluZSBSdWxlc1xuICovXG5cbklubGluZUxleGVyLnJ1bGVzID0gaW5saW5lO1xuXG4vKipcbiAqIFN0YXRpYyBMZXhpbmcvQ29tcGlsaW5nIE1ldGhvZFxuICovXG5cbklubGluZUxleGVyLm91dHB1dCA9IGZ1bmN0aW9uKHNyYywgbGlua3MsIG9wdGlvbnMpIHtcbiAgdmFyIGlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihsaW5rcywgb3B0aW9ucyk7XG4gIHJldHVybiBpbmxpbmUub3V0cHV0KHNyYyk7XG59O1xuXG4vKipcbiAqIExleGluZy9Db21waWxpbmdcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUub3V0cHV0ID0gZnVuY3Rpb24oc3JjKSB7XG4gIHZhciBvdXQgPSAnJyxcbiAgICAgIGxpbmssXG4gICAgICB0ZXh0LFxuICAgICAgaHJlZixcbiAgICAgIHRpdGxlLFxuICAgICAgY2FwLFxuICAgICAgcHJldkNhcFplcm87XG5cbiAgd2hpbGUgKHNyYykge1xuICAgIC8vIGVzY2FwZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmVzY2FwZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0YWdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50YWcuZXhlYyhzcmMpKSB7XG4gICAgICBpZiAoIXRoaXMuaW5MaW5rICYmIC9ePGEgL2kudGVzdChjYXBbMF0pKSB7XG4gICAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pbkxpbmsgJiYgL148XFwvYT4vaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pblJhd0Jsb2NrICYmIC9ePChwcmV8Y29kZXxrYmR8c2NyaXB0KShcXHN8PikvaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pblJhd0Jsb2NrID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pblJhd0Jsb2NrICYmIC9ePFxcLyhwcmV8Y29kZXxrYmR8c2NyaXB0KShcXHN8PikvaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pblJhd0Jsb2NrID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5vcHRpb25zLnNhbml0aXplXG4gICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplclxuICAgICAgICAgID8gdGhpcy5vcHRpb25zLnNhbml0aXplcihjYXBbMF0pXG4gICAgICAgICAgOiBlc2NhcGUoY2FwWzBdKVxuICAgICAgICA6IGNhcFswXTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGxpbmtcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saW5rLmV4ZWMoc3JjKSkge1xuICAgICAgdmFyIGxhc3RQYXJlbkluZGV4ID0gZmluZENsb3NpbmdCcmFja2V0KGNhcFsyXSwgJygpJyk7XG4gICAgICBpZiAobGFzdFBhcmVuSW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgbGlua0xlbiA9IGNhcFswXS5sZW5ndGggLSAoY2FwWzJdLmxlbmd0aCAtIGxhc3RQYXJlbkluZGV4KSAtIChjYXBbM10gfHwgJycpLmxlbmd0aDtcbiAgICAgICAgY2FwWzJdID0gY2FwWzJdLnN1YnN0cmluZygwLCBsYXN0UGFyZW5JbmRleCk7XG4gICAgICAgIGNhcFswXSA9IGNhcFswXS5zdWJzdHJpbmcoMCwgbGlua0xlbikudHJpbSgpO1xuICAgICAgICBjYXBbM10gPSAnJztcbiAgICAgIH1cbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBocmVmID0gY2FwWzJdO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgICAgICBsaW5rID0gL14oW14nXCJdKlteXFxzXSlcXHMrKFsnXCJdKSguKilcXDIvLmV4ZWMoaHJlZik7XG5cbiAgICAgICAgaWYgKGxpbmspIHtcbiAgICAgICAgICBocmVmID0gbGlua1sxXTtcbiAgICAgICAgICB0aXRsZSA9IGxpbmtbM107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGl0bGUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGl0bGUgPSBjYXBbM10gPyBjYXBbM10uc2xpY2UoMSwgLTEpIDogJyc7XG4gICAgICB9XG4gICAgICBocmVmID0gaHJlZi50cmltKCkucmVwbGFjZSgvXjwoW1xcc1xcU10qKT4kLywgJyQxJyk7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwge1xuICAgICAgICBocmVmOiBJbmxpbmVMZXhlci5lc2NhcGVzKGhyZWYpLFxuICAgICAgICB0aXRsZTogSW5saW5lTGV4ZXIuZXNjYXBlcyh0aXRsZSlcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pbkxpbmsgPSBmYWxzZTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHJlZmxpbmssIG5vbGlua1xuICAgIGlmICgoY2FwID0gdGhpcy5ydWxlcy5yZWZsaW5rLmV4ZWMoc3JjKSlcbiAgICAgICAgfHwgKGNhcCA9IHRoaXMucnVsZXMubm9saW5rLmV4ZWMoc3JjKSkpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBsaW5rID0gKGNhcFsyXSB8fCBjYXBbMV0pLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgIGxpbmsgPSB0aGlzLmxpbmtzW2xpbmsudG9Mb3dlckNhc2UoKV07XG4gICAgICBpZiAoIWxpbmsgfHwgIWxpbmsuaHJlZikge1xuICAgICAgICBvdXQgKz0gY2FwWzBdLmNoYXJBdCgwKTtcbiAgICAgICAgc3JjID0gY2FwWzBdLnN1YnN0cmluZygxKSArIHNyYztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICB0aGlzLmluTGluayA9IHRydWU7XG4gICAgICBvdXQgKz0gdGhpcy5vdXRwdXRMaW5rKGNhcCwgbGluayk7XG4gICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gc3Ryb25nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuc3Ryb25nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnN0cm9uZyh0aGlzLm91dHB1dChjYXBbNF0gfHwgY2FwWzNdIHx8IGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGVtXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZW0uZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZW0odGhpcy5vdXRwdXQoY2FwWzZdIHx8IGNhcFs1XSB8fCBjYXBbNF0gfHwgY2FwWzNdIHx8IGNhcFsyXSB8fCBjYXBbMV0pKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGNvZGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5jb2RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmNvZGVzcGFuKGVzY2FwZShjYXBbMl0udHJpbSgpLCB0cnVlKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBiclxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmJyLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmJyKCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBkZWwgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5kZWwuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuZGVsKHRoaXMub3V0cHV0KGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gYXV0b2xpbmtcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5hdXRvbGluay5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAoY2FwWzJdID09PSAnQCcpIHtcbiAgICAgICAgdGV4dCA9IGVzY2FwZSh0aGlzLm1hbmdsZShjYXBbMV0pKTtcbiAgICAgICAgaHJlZiA9ICdtYWlsdG86JyArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFsxXSk7XG4gICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgfVxuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHVybCAoZ2ZtKVxuICAgIGlmICghdGhpcy5pbkxpbmsgJiYgKGNhcCA9IHRoaXMucnVsZXMudXJsLmV4ZWMoc3JjKSkpIHtcbiAgICAgIGlmIChjYXBbMl0gPT09ICdAJykge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFswXSk7XG4gICAgICAgIGhyZWYgPSAnbWFpbHRvOicgKyB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZG8gZXh0ZW5kZWQgYXV0b2xpbmsgcGF0aCB2YWxpZGF0aW9uXG4gICAgICAgIGRvIHtcbiAgICAgICAgICBwcmV2Q2FwWmVybyA9IGNhcFswXTtcbiAgICAgICAgICBjYXBbMF0gPSB0aGlzLnJ1bGVzLl9iYWNrcGVkYWwuZXhlYyhjYXBbMF0pWzBdO1xuICAgICAgICB9IHdoaWxlIChwcmV2Q2FwWmVybyAhPT0gY2FwWzBdKTtcbiAgICAgICAgdGV4dCA9IGVzY2FwZShjYXBbMF0pO1xuICAgICAgICBpZiAoY2FwWzFdID09PSAnd3d3LicpIHtcbiAgICAgICAgICBocmVmID0gJ2h0dHA6Ly8nICsgdGV4dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBocmVmID0gdGV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgbnVsbCwgdGV4dCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0ZXh0XG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMudGV4dC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBpZiAodGhpcy5pblJhd0Jsb2NrKSB7XG4gICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnRleHQoY2FwWzBdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dCArPSB0aGlzLnJlbmRlcmVyLnRleHQoZXNjYXBlKHRoaXMuc21hcnR5cGFudHMoY2FwWzBdKSkpO1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaWYgKHNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZpbml0ZSBsb29wIG9uIGJ5dGU6ICcgKyBzcmMuY2hhckNvZGVBdCgwKSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbklubGluZUxleGVyLmVzY2FwZXMgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiB0ZXh0ID8gdGV4dC5yZXBsYWNlKElubGluZUxleGVyLnJ1bGVzLl9lc2NhcGVzLCAnJDEnKSA6IHRleHQ7XG59O1xuXG4vKipcbiAqIENvbXBpbGUgTGlua1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5vdXRwdXRMaW5rID0gZnVuY3Rpb24oY2FwLCBsaW5rKSB7XG4gIHZhciBocmVmID0gbGluay5ocmVmLFxuICAgICAgdGl0bGUgPSBsaW5rLnRpdGxlID8gZXNjYXBlKGxpbmsudGl0bGUpIDogbnVsbDtcblxuICByZXR1cm4gY2FwWzBdLmNoYXJBdCgwKSAhPT0gJyEnXG4gICAgPyB0aGlzLnJlbmRlcmVyLmxpbmsoaHJlZiwgdGl0bGUsIHRoaXMub3V0cHV0KGNhcFsxXSkpXG4gICAgOiB0aGlzLnJlbmRlcmVyLmltYWdlKGhyZWYsIHRpdGxlLCBlc2NhcGUoY2FwWzFdKSk7XG59O1xuXG4vKipcbiAqIFNtYXJ0eXBhbnRzIFRyYW5zZm9ybWF0aW9uc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5zbWFydHlwYW50cyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgaWYgKCF0aGlzLm9wdGlvbnMuc21hcnR5cGFudHMpIHJldHVybiB0ZXh0O1xuICByZXR1cm4gdGV4dFxuICAgIC8vIGVtLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS0vZywgJ1xcdTIwMTQnKVxuICAgIC8vIGVuLWRhc2hlc1xuICAgIC5yZXBsYWNlKC8tLS9nLCAnXFx1MjAxMycpXG4gICAgLy8gb3BlbmluZyBzaW5nbGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1wiXFxzXSknL2csICckMVxcdTIwMTgnKVxuICAgIC8vIGNsb3Npbmcgc2luZ2xlcyAmIGFwb3N0cm9waGVzXG4gICAgLnJlcGxhY2UoLycvZywgJ1xcdTIwMTknKVxuICAgIC8vIG9wZW5pbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC8oXnxbLVxcdTIwMTQvKFxcW3tcXHUyMDE4XFxzXSlcIi9nLCAnJDFcXHUyMDFjJylcbiAgICAvLyBjbG9zaW5nIGRvdWJsZXNcbiAgICAucmVwbGFjZSgvXCIvZywgJ1xcdTIwMWQnKVxuICAgIC8vIGVsbGlwc2VzXG4gICAgLnJlcGxhY2UoL1xcLnszfS9nLCAnXFx1MjAyNicpO1xufTtcblxuLyoqXG4gKiBNYW5nbGUgTGlua3NcbiAqL1xuXG5JbmxpbmVMZXhlci5wcm90b3R5cGUubWFuZ2xlID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5tYW5nbGUpIHJldHVybiB0ZXh0O1xuICB2YXIgb3V0ID0gJycsXG4gICAgICBsID0gdGV4dC5sZW5ndGgsXG4gICAgICBpID0gMCxcbiAgICAgIGNoO1xuXG4gIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgY2ggPSB0ZXh0LmNoYXJDb2RlQXQoaSk7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgIGNoID0gJ3gnICsgY2gudG9TdHJpbmcoMTYpO1xuICAgIH1cbiAgICBvdXQgKz0gJyYjJyArIGNoICsgJzsnO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogUmVuZGVyZXJcbiAqL1xuXG5mdW5jdGlvbiBSZW5kZXJlcihvcHRpb25zKSB7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xufVxuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZSA9IGZ1bmN0aW9uKGNvZGUsIGluZm9zdHJpbmcsIGVzY2FwZWQpIHtcbiAgdmFyIGxhbmcgPSAoaW5mb3N0cmluZyB8fCAnJykubWF0Y2goL1xcUyovKVswXTtcbiAgaWYgKHRoaXMub3B0aW9ucy5oaWdobGlnaHQpIHtcbiAgICB2YXIgb3V0ID0gdGhpcy5vcHRpb25zLmhpZ2hsaWdodChjb2RlLCBsYW5nKTtcbiAgICBpZiAob3V0ICE9IG51bGwgJiYgb3V0ICE9PSBjb2RlKSB7XG4gICAgICBlc2NhcGVkID0gdHJ1ZTtcbiAgICAgIGNvZGUgPSBvdXQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFsYW5nKSB7XG4gICAgcmV0dXJuICc8cHJlPjxjb2RlPidcbiAgICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICAgKyAnPC9jb2RlPjwvcHJlPic7XG4gIH1cblxuICByZXR1cm4gJzxwcmU+PGNvZGUgY2xhc3M9XCInXG4gICAgKyB0aGlzLm9wdGlvbnMubGFuZ1ByZWZpeFxuICAgICsgZXNjYXBlKGxhbmcsIHRydWUpXG4gICAgKyAnXCI+J1xuICAgICsgKGVzY2FwZWQgPyBjb2RlIDogZXNjYXBlKGNvZGUsIHRydWUpKVxuICAgICsgJzwvY29kZT48L3ByZT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmJsb2NrcXVvdGUgPSBmdW5jdGlvbihxdW90ZSkge1xuICByZXR1cm4gJzxibG9ja3F1b3RlPlxcbicgKyBxdW90ZSArICc8L2Jsb2NrcXVvdGU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5odG1sID0gZnVuY3Rpb24oaHRtbCkge1xuICByZXR1cm4gaHRtbDtcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5oZWFkaW5nID0gZnVuY3Rpb24odGV4dCwgbGV2ZWwsIHJhdywgc2x1Z2dlcikge1xuICBpZiAodGhpcy5vcHRpb25zLmhlYWRlcklkcykge1xuICAgIHJldHVybiAnPGgnXG4gICAgICArIGxldmVsXG4gICAgICArICcgaWQ9XCInXG4gICAgICArIHRoaXMub3B0aW9ucy5oZWFkZXJQcmVmaXhcbiAgICAgICsgc2x1Z2dlci5zbHVnKHJhdylcbiAgICAgICsgJ1wiPidcbiAgICAgICsgdGV4dFxuICAgICAgKyAnPC9oJ1xuICAgICAgKyBsZXZlbFxuICAgICAgKyAnPlxcbic7XG4gIH1cbiAgLy8gaWdub3JlIElEc1xuICByZXR1cm4gJzxoJyArIGxldmVsICsgJz4nICsgdGV4dCArICc8L2gnICsgbGV2ZWwgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaHIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8aHIvPlxcbicgOiAnPGhyPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdCA9IGZ1bmN0aW9uKGJvZHksIG9yZGVyZWQsIHN0YXJ0KSB7XG4gIHZhciB0eXBlID0gb3JkZXJlZCA/ICdvbCcgOiAndWwnLFxuICAgICAgc3RhcnRhdHQgPSAob3JkZXJlZCAmJiBzdGFydCAhPT0gMSkgPyAoJyBzdGFydD1cIicgKyBzdGFydCArICdcIicpIDogJyc7XG4gIHJldHVybiAnPCcgKyB0eXBlICsgc3RhcnRhdHQgKyAnPlxcbicgKyBib2R5ICsgJzwvJyArIHR5cGUgKyAnPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGlzdGl0ZW0gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGxpPicgKyB0ZXh0ICsgJzwvbGk+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5jaGVja2JveCA9IGZ1bmN0aW9uKGNoZWNrZWQpIHtcbiAgcmV0dXJuICc8aW5wdXQgJ1xuICAgICsgKGNoZWNrZWQgPyAnY2hlY2tlZD1cIlwiICcgOiAnJylcbiAgICArICdkaXNhYmxlZD1cIlwiIHR5cGU9XCJjaGVja2JveFwiJ1xuICAgICsgKHRoaXMub3B0aW9ucy54aHRtbCA/ICcgLycgOiAnJylcbiAgICArICc+ICc7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUucGFyYWdyYXBoID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxwPicgKyB0ZXh0ICsgJzwvcD5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlID0gZnVuY3Rpb24oaGVhZGVyLCBib2R5KSB7XG4gIGlmIChib2R5KSBib2R5ID0gJzx0Ym9keT4nICsgYm9keSArICc8L3Rib2R5Pic7XG5cbiAgcmV0dXJuICc8dGFibGU+XFxuJ1xuICAgICsgJzx0aGVhZD5cXG4nXG4gICAgKyBoZWFkZXJcbiAgICArICc8L3RoZWFkPlxcbidcbiAgICArIGJvZHlcbiAgICArICc8L3RhYmxlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGVyb3cgPSBmdW5jdGlvbihjb250ZW50KSB7XG4gIHJldHVybiAnPHRyPlxcbicgKyBjb250ZW50ICsgJzwvdHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZWNlbGwgPSBmdW5jdGlvbihjb250ZW50LCBmbGFncykge1xuICB2YXIgdHlwZSA9IGZsYWdzLmhlYWRlciA/ICd0aCcgOiAndGQnO1xuICB2YXIgdGFnID0gZmxhZ3MuYWxpZ25cbiAgICA/ICc8JyArIHR5cGUgKyAnIGFsaWduPVwiJyArIGZsYWdzLmFsaWduICsgJ1wiPidcbiAgICA6ICc8JyArIHR5cGUgKyAnPic7XG4gIHJldHVybiB0YWcgKyBjb250ZW50ICsgJzwvJyArIHR5cGUgKyAnPlxcbic7XG59O1xuXG4vLyBzcGFuIGxldmVsIHJlbmRlcmVyXG5SZW5kZXJlci5wcm90b3R5cGUuc3Ryb25nID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxzdHJvbmc+JyArIHRleHQgKyAnPC9zdHJvbmc+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5lbSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8ZW0+JyArIHRleHQgKyAnPC9lbT4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmNvZGVzcGFuID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxjb2RlPicgKyB0ZXh0ICsgJzwvY29kZT4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmJyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLm9wdGlvbnMueGh0bWwgPyAnPGJyLz4nIDogJzxicj4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8ZGVsPicgKyB0ZXh0ICsgJzwvZGVsPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUubGluayA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIGhyZWYgPSBjbGVhblVybCh0aGlzLm9wdGlvbnMuc2FuaXRpemUsIHRoaXMub3B0aW9ucy5iYXNlVXJsLCBocmVmKTtcbiAgaWYgKGhyZWYgPT09IG51bGwpIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuICB2YXIgb3V0ID0gJzxhIGhyZWY9XCInICsgZXNjYXBlKGhyZWYpICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSAnPicgKyB0ZXh0ICsgJzwvYT4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgaHJlZiA9IGNsZWFuVXJsKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSwgdGhpcy5vcHRpb25zLmJhc2VVcmwsIGhyZWYpO1xuICBpZiAoaHJlZiA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgdmFyIG91dCA9ICc8aW1nIHNyYz1cIicgKyBocmVmICsgJ1wiIGFsdD1cIicgKyB0ZXh0ICsgJ1wiJztcbiAgaWYgKHRpdGxlKSB7XG4gICAgb3V0ICs9ICcgdGl0bGU9XCInICsgdGl0bGUgKyAnXCInO1xuICB9XG4gIG91dCArPSB0aGlzLm9wdGlvbnMueGh0bWwgPyAnLz4nIDogJz4nO1xuICByZXR1cm4gb3V0O1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiB0ZXh0O1xufTtcblxuLyoqXG4gKiBUZXh0UmVuZGVyZXJcbiAqIHJldHVybnMgb25seSB0aGUgdGV4dHVhbCBwYXJ0IG9mIHRoZSB0b2tlblxuICovXG5cbmZ1bmN0aW9uIFRleHRSZW5kZXJlcigpIHt9XG5cbi8vIG5vIG5lZWQgZm9yIGJsb2NrIGxldmVsIHJlbmRlcmVyc1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnN0cm9uZyA9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmVtID1cblRleHRSZW5kZXJlci5wcm90b3R5cGUuY29kZXNwYW4gPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5kZWwgPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS50ZXh0ID0gZnVuY3Rpb24gKHRleHQpIHtcbiAgcmV0dXJuIHRleHQ7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmxpbmsgPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5pbWFnZSA9IGZ1bmN0aW9uKGhyZWYsIHRpdGxlLCB0ZXh0KSB7XG4gIHJldHVybiAnJyArIHRleHQ7XG59O1xuXG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmJyID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJztcbn07XG5cbi8qKlxuICogUGFyc2luZyAmIENvbXBpbGluZ1xuICovXG5cbmZ1bmN0aW9uIFBhcnNlcihvcHRpb25zKSB7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMudG9rZW4gPSBudWxsO1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IG1hcmtlZC5kZWZhdWx0cztcbiAgdGhpcy5vcHRpb25zLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyIHx8IG5ldyBSZW5kZXJlcigpO1xuICB0aGlzLnJlbmRlcmVyID0gdGhpcy5vcHRpb25zLnJlbmRlcmVyO1xuICB0aGlzLnJlbmRlcmVyLm9wdGlvbnMgPSB0aGlzLm9wdGlvbnM7XG4gIHRoaXMuc2x1Z2dlciA9IG5ldyBTbHVnZ2VyKCk7XG59XG5cbi8qKlxuICogU3RhdGljIFBhcnNlIE1ldGhvZFxuICovXG5cblBhcnNlci5wYXJzZSA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucykge1xuICB2YXIgcGFyc2VyID0gbmV3IFBhcnNlcihvcHRpb25zKTtcbiAgcmV0dXJuIHBhcnNlci5wYXJzZShzcmMpO1xufTtcblxuLyoqXG4gKiBQYXJzZSBMb29wXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKHNyYykge1xuICB0aGlzLmlubGluZSA9IG5ldyBJbmxpbmVMZXhlcihzcmMubGlua3MsIHRoaXMub3B0aW9ucyk7XG4gIC8vIHVzZSBhbiBJbmxpbmVMZXhlciB3aXRoIGEgVGV4dFJlbmRlcmVyIHRvIGV4dHJhY3QgcHVyZSB0ZXh0XG4gIHRoaXMuaW5saW5lVGV4dCA9IG5ldyBJbmxpbmVMZXhlcihcbiAgICBzcmMubGlua3MsXG4gICAgbWVyZ2Uoe30sIHRoaXMub3B0aW9ucywge3JlbmRlcmVyOiBuZXcgVGV4dFJlbmRlcmVyKCl9KVxuICApO1xuICB0aGlzLnRva2VucyA9IHNyYy5yZXZlcnNlKCk7XG5cbiAgdmFyIG91dCA9ICcnO1xuICB3aGlsZSAodGhpcy5uZXh0KCkpIHtcbiAgICBvdXQgKz0gdGhpcy50b2soKTtcbiAgfVxuXG4gIHJldHVybiBvdXQ7XG59O1xuXG4vKipcbiAqIE5leHQgVG9rZW5cbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudG9rZW4gPSB0aGlzLnRva2Vucy5wb3AoKTtcbn07XG5cbi8qKlxuICogUHJldmlldyBOZXh0IFRva2VuXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLnRva2Vucy5sZW5ndGggLSAxXSB8fCAwO1xufTtcblxuLyoqXG4gKiBQYXJzZSBUZXh0IFRva2Vuc1xuICovXG5cblBhcnNlci5wcm90b3R5cGUucGFyc2VUZXh0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBib2R5ID0gdGhpcy50b2tlbi50ZXh0O1xuXG4gIHdoaWxlICh0aGlzLnBlZWsoKS50eXBlID09PSAndGV4dCcpIHtcbiAgICBib2R5ICs9ICdcXG4nICsgdGhpcy5uZXh0KCkudGV4dDtcbiAgfVxuXG4gIHJldHVybiB0aGlzLmlubGluZS5vdXRwdXQoYm9keSk7XG59O1xuXG4vKipcbiAqIFBhcnNlIEN1cnJlbnQgVG9rZW5cbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnRvayA9IGZ1bmN0aW9uKCkge1xuICBzd2l0Y2ggKHRoaXMudG9rZW4udHlwZSkge1xuICAgIGNhc2UgJ3NwYWNlJzoge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBjYXNlICdocic6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmhyKCk7XG4gICAgfVxuICAgIGNhc2UgJ2hlYWRpbmcnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5oZWFkaW5nKFxuICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSxcbiAgICAgICAgdGhpcy50b2tlbi5kZXB0aCxcbiAgICAgICAgdW5lc2NhcGUodGhpcy5pbmxpbmVUZXh0Lm91dHB1dCh0aGlzLnRva2VuLnRleHQpKSxcbiAgICAgICAgdGhpcy5zbHVnZ2VyKTtcbiAgICB9XG4gICAgY2FzZSAnY29kZSc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmNvZGUodGhpcy50b2tlbi50ZXh0LFxuICAgICAgICB0aGlzLnRva2VuLmxhbmcsXG4gICAgICAgIHRoaXMudG9rZW4uZXNjYXBlZCk7XG4gICAgfVxuICAgIGNhc2UgJ3RhYmxlJzoge1xuICAgICAgdmFyIGhlYWRlciA9ICcnLFxuICAgICAgICAgIGJvZHkgPSAnJyxcbiAgICAgICAgICBpLFxuICAgICAgICAgIHJvdyxcbiAgICAgICAgICBjZWxsLFxuICAgICAgICAgIGo7XG5cbiAgICAgIC8vIGhlYWRlclxuICAgICAgY2VsbCA9ICcnO1xuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudG9rZW4uaGVhZGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNlbGwgKz0gdGhpcy5yZW5kZXJlci50YWJsZWNlbGwoXG4gICAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHRoaXMudG9rZW4uaGVhZGVyW2ldKSxcbiAgICAgICAgICB7IGhlYWRlcjogdHJ1ZSwgYWxpZ246IHRoaXMudG9rZW4uYWxpZ25baV0gfVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaGVhZGVyICs9IHRoaXMucmVuZGVyZXIudGFibGVyb3coY2VsbCk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLnRva2VuLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdyA9IHRoaXMudG9rZW4uY2VsbHNbaV07XG5cbiAgICAgICAgY2VsbCA9ICcnO1xuICAgICAgICBmb3IgKGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY2VsbCArPSB0aGlzLnJlbmRlcmVyLnRhYmxlY2VsbChcbiAgICAgICAgICAgIHRoaXMuaW5saW5lLm91dHB1dChyb3dbal0pLFxuICAgICAgICAgICAgeyBoZWFkZXI6IGZhbHNlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltqXSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkgKz0gdGhpcy5yZW5kZXJlci50YWJsZXJvdyhjZWxsKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnRhYmxlKGhlYWRlciwgYm9keSk7XG4gICAgfVxuICAgIGNhc2UgJ2Jsb2NrcXVvdGVfc3RhcnQnOiB7XG4gICAgICBib2R5ID0gJyc7XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnYmxvY2txdW90ZV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gdGhpcy50b2soKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuYmxvY2txdW90ZShib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9zdGFydCc6IHtcbiAgICAgIGJvZHkgPSAnJztcbiAgICAgIHZhciBvcmRlcmVkID0gdGhpcy50b2tlbi5vcmRlcmVkLFxuICAgICAgICAgIHN0YXJ0ID0gdGhpcy50b2tlbi5zdGFydDtcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdsaXN0X2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0KGJvZHksIG9yZGVyZWQsIHN0YXJ0KTtcbiAgICB9XG4gICAgY2FzZSAnbGlzdF9pdGVtX3N0YXJ0Jzoge1xuICAgICAgYm9keSA9ICcnO1xuICAgICAgdmFyIGxvb3NlID0gdGhpcy50b2tlbi5sb29zZTtcbiAgICAgIHZhciBjaGVja2VkID0gdGhpcy50b2tlbi5jaGVja2VkO1xuICAgICAgdmFyIHRhc2sgPSB0aGlzLnRva2VuLnRhc2s7XG5cbiAgICAgIGlmICh0aGlzLnRva2VuLnRhc2spIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLmNoZWNrYm94KGNoZWNrZWQpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2xpc3RfaXRlbV9lbmQnKSB7XG4gICAgICAgIGJvZHkgKz0gIWxvb3NlICYmIHRoaXMudG9rZW4udHlwZSA9PT0gJ3RleHQnXG4gICAgICAgICAgPyB0aGlzLnBhcnNlVGV4dCgpXG4gICAgICAgICAgOiB0aGlzLnRvaygpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIubGlzdGl0ZW0oYm9keSwgdGFzaywgY2hlY2tlZCk7XG4gICAgfVxuICAgIGNhc2UgJ2h0bWwnOiB7XG4gICAgICAvLyBUT0RPIHBhcnNlIGlubGluZSBjb250ZW50IGlmIHBhcmFtZXRlciBtYXJrZG93bj0xXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5odG1sKHRoaXMudG9rZW4udGV4dCk7XG4gICAgfVxuICAgIGNhc2UgJ3BhcmFncmFwaCc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi50ZXh0KSk7XG4gICAgfVxuICAgIGNhc2UgJ3RleHQnOiB7XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5wYXJhZ3JhcGgodGhpcy5wYXJzZVRleHQoKSk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHZhciBlcnJNc2cgPSAnVG9rZW4gd2l0aCBcIicgKyB0aGlzLnRva2VuLnR5cGUgKyAnXCIgdHlwZSB3YXMgbm90IGZvdW5kLic7XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpbGVudCkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJNc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVyck1zZyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIFNsdWdnZXIgZ2VuZXJhdGVzIGhlYWRlciBpZFxuICovXG5cbmZ1bmN0aW9uIFNsdWdnZXIgKCkge1xuICB0aGlzLnNlZW4gPSB7fTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHN0cmluZyB0byB1bmlxdWUgaWRcbiAqL1xuXG5TbHVnZ2VyLnByb3RvdHlwZS5zbHVnID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBzbHVnID0gdmFsdWVcbiAgICAudG9Mb3dlckNhc2UoKVxuICAgIC50cmltKClcbiAgICAucmVwbGFjZSgvW1xcdTIwMDAtXFx1MjA2RlxcdTJFMDAtXFx1MkU3RlxcXFwnIVwiIyQlJigpKissLi86Ozw9Pj9AW1xcXV5ge3x9fl0vZywgJycpXG4gICAgLnJlcGxhY2UoL1xccy9nLCAnLScpO1xuXG4gIGlmICh0aGlzLnNlZW4uaGFzT3duUHJvcGVydHkoc2x1ZykpIHtcbiAgICB2YXIgb3JpZ2luYWxTbHVnID0gc2x1ZztcbiAgICBkbyB7XG4gICAgICB0aGlzLnNlZW5bb3JpZ2luYWxTbHVnXSsrO1xuICAgICAgc2x1ZyA9IG9yaWdpbmFsU2x1ZyArICctJyArIHRoaXMuc2VlbltvcmlnaW5hbFNsdWddO1xuICAgIH0gd2hpbGUgKHRoaXMuc2Vlbi5oYXNPd25Qcm9wZXJ0eShzbHVnKSk7XG4gIH1cbiAgdGhpcy5zZWVuW3NsdWddID0gMDtcblxuICByZXR1cm4gc2x1Zztcbn07XG5cbi8qKlxuICogSGVscGVyc1xuICovXG5cbmZ1bmN0aW9uIGVzY2FwZShodG1sLCBlbmNvZGUpIHtcbiAgaWYgKGVuY29kZSkge1xuICAgIGlmIChlc2NhcGUuZXNjYXBlVGVzdC50ZXN0KGh0bWwpKSB7XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKGVzY2FwZS5lc2NhcGVSZXBsYWNlLCBmdW5jdGlvbiAoY2gpIHsgcmV0dXJuIGVzY2FwZS5yZXBsYWNlbWVudHNbY2hdOyB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVzY2FwZS5lc2NhcGVUZXN0Tm9FbmNvZGUudGVzdChodG1sKSkge1xuICAgICAgcmV0dXJuIGh0bWwucmVwbGFjZShlc2NhcGUuZXNjYXBlUmVwbGFjZU5vRW5jb2RlLCBmdW5jdGlvbiAoY2gpIHsgcmV0dXJuIGVzY2FwZS5yZXBsYWNlbWVudHNbY2hdOyB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaHRtbDtcbn1cblxuZXNjYXBlLmVzY2FwZVRlc3QgPSAvWyY8PlwiJ10vO1xuZXNjYXBlLmVzY2FwZVJlcGxhY2UgPSAvWyY8PlwiJ10vZztcbmVzY2FwZS5yZXBsYWNlbWVudHMgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmIzM5Oydcbn07XG5cbmVzY2FwZS5lc2NhcGVUZXN0Tm9FbmNvZGUgPSAvWzw+XCInXXwmKD8hIz9cXHcrOykvO1xuZXNjYXBlLmVzY2FwZVJlcGxhY2VOb0VuY29kZSA9IC9bPD5cIiddfCYoPyEjP1xcdys7KS9nO1xuXG5mdW5jdGlvbiB1bmVzY2FwZShodG1sKSB7XG4gIC8vIGV4cGxpY2l0bHkgbWF0Y2ggZGVjaW1hbCwgaGV4LCBhbmQgbmFtZWQgSFRNTCBlbnRpdGllc1xuICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mKCMoPzpcXGQrKXwoPzojeFswLTlBLUZhLWZdKyl8KD86XFx3KykpOz8vaWcsIGZ1bmN0aW9uKF8sIG4pIHtcbiAgICBuID0gbi50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChuID09PSAnY29sb24nKSByZXR1cm4gJzonO1xuICAgIGlmIChuLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICByZXR1cm4gbi5jaGFyQXQoMSkgPT09ICd4J1xuICAgICAgICA/IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobi5zdWJzdHJpbmcoMiksIDE2KSlcbiAgICAgICAgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKCtuLnN1YnN0cmluZygxKSk7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGVkaXQocmVnZXgsIG9wdCkge1xuICByZWdleCA9IHJlZ2V4LnNvdXJjZSB8fCByZWdleDtcbiAgb3B0ID0gb3B0IHx8ICcnO1xuICByZXR1cm4ge1xuICAgIHJlcGxhY2U6IGZ1bmN0aW9uKG5hbWUsIHZhbCkge1xuICAgICAgdmFsID0gdmFsLnNvdXJjZSB8fCB2YWw7XG4gICAgICB2YWwgPSB2YWwucmVwbGFjZSgvKF58W15cXFtdKVxcXi9nLCAnJDEnKTtcbiAgICAgIHJlZ2V4ID0gcmVnZXgucmVwbGFjZShuYW1lLCB2YWwpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRSZWdleDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleCwgb3B0KTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNsZWFuVXJsKHNhbml0aXplLCBiYXNlLCBocmVmKSB7XG4gIGlmIChzYW5pdGl6ZSkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgcHJvdCA9IGRlY29kZVVSSUNvbXBvbmVudCh1bmVzY2FwZShocmVmKSlcbiAgICAgICAgLnJlcGxhY2UoL1teXFx3Ol0vZywgJycpXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAocHJvdC5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09PSAwIHx8IHByb3QuaW5kZXhPZigndmJzY3JpcHQ6JykgPT09IDAgfHwgcHJvdC5pbmRleE9mKCdkYXRhOicpID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbiAgaWYgKGJhc2UgJiYgIW9yaWdpbkluZGVwZW5kZW50VXJsLnRlc3QoaHJlZikpIHtcbiAgICBocmVmID0gcmVzb2x2ZVVybChiYXNlLCBocmVmKTtcbiAgfVxuICB0cnkge1xuICAgIGhyZWYgPSBlbmNvZGVVUkkoaHJlZikucmVwbGFjZSgvJTI1L2csICclJyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gaHJlZjtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZVVybChiYXNlLCBocmVmKSB7XG4gIGlmICghYmFzZVVybHNbJyAnICsgYmFzZV0pIHtcbiAgICAvLyB3ZSBjYW4gaWdub3JlIGV2ZXJ5dGhpbmcgaW4gYmFzZSBhZnRlciB0aGUgbGFzdCBzbGFzaCBvZiBpdHMgcGF0aCBjb21wb25lbnQsXG4gICAgLy8gYnV0IHdlIG1pZ2h0IG5lZWQgdG8gYWRkIF90aGF0X1xuICAgIC8vIGh0dHBzOi8vdG9vbHMuaWV0Zi5vcmcvaHRtbC9yZmMzOTg2I3NlY3Rpb24tM1xuICAgIGlmICgvXlteOl0rOlxcLypbXi9dKiQvLnRlc3QoYmFzZSkpIHtcbiAgICAgIGJhc2VVcmxzWycgJyArIGJhc2VdID0gYmFzZSArICcvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYmFzZVVybHNbJyAnICsgYmFzZV0gPSBydHJpbShiYXNlLCAnLycsIHRydWUpO1xuICAgIH1cbiAgfVxuICBiYXNlID0gYmFzZVVybHNbJyAnICsgYmFzZV07XG5cbiAgaWYgKGhyZWYuc2xpY2UoMCwgMikgPT09ICcvLycpIHtcbiAgICByZXR1cm4gYmFzZS5yZXBsYWNlKC86W1xcc1xcU10qLywgJzonKSArIGhyZWY7XG4gIH0gZWxzZSBpZiAoaHJlZi5jaGFyQXQoMCkgPT09ICcvJykge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoLyg6XFwvKlteL10qKVtcXHNcXFNdKi8sICckMScpICsgaHJlZjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYmFzZSArIGhyZWY7XG4gIH1cbn1cbnZhciBiYXNlVXJscyA9IHt9O1xudmFyIG9yaWdpbkluZGVwZW5kZW50VXJsID0gL14kfF5bYS16XVthLXowLTkrLi1dKjp8Xls/I10vaTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5ub29wLmV4ZWMgPSBub29wO1xuXG5mdW5jdGlvbiBtZXJnZShvYmopIHtcbiAgdmFyIGkgPSAxLFxuICAgICAgdGFyZ2V0LFxuICAgICAga2V5O1xuXG4gIGZvciAoOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdGFyZ2V0ID0gYXJndW1lbnRzW2ldO1xuICAgIGZvciAoa2V5IGluIHRhcmdldCkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0YXJnZXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBzcGxpdENlbGxzKHRhYmxlUm93LCBjb3VudCkge1xuICAvLyBlbnN1cmUgdGhhdCBldmVyeSBjZWxsLWRlbGltaXRpbmcgcGlwZSBoYXMgYSBzcGFjZVxuICAvLyBiZWZvcmUgaXQgdG8gZGlzdGluZ3Vpc2ggaXQgZnJvbSBhbiBlc2NhcGVkIHBpcGVcbiAgdmFyIHJvdyA9IHRhYmxlUm93LnJlcGxhY2UoL1xcfC9nLCBmdW5jdGlvbiAobWF0Y2gsIG9mZnNldCwgc3RyKSB7XG4gICAgICAgIHZhciBlc2NhcGVkID0gZmFsc2UsXG4gICAgICAgICAgICBjdXJyID0gb2Zmc2V0O1xuICAgICAgICB3aGlsZSAoLS1jdXJyID49IDAgJiYgc3RyW2N1cnJdID09PSAnXFxcXCcpIGVzY2FwZWQgPSAhZXNjYXBlZDtcbiAgICAgICAgaWYgKGVzY2FwZWQpIHtcbiAgICAgICAgICAvLyBvZGQgbnVtYmVyIG9mIHNsYXNoZXMgbWVhbnMgfCBpcyBlc2NhcGVkXG4gICAgICAgICAgLy8gc28gd2UgbGVhdmUgaXQgYWxvbmVcbiAgICAgICAgICByZXR1cm4gJ3wnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGFkZCBzcGFjZSBiZWZvcmUgdW5lc2NhcGVkIHxcbiAgICAgICAgICByZXR1cm4gJyB8JztcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBjZWxscyA9IHJvdy5zcGxpdCgvIFxcfC8pLFxuICAgICAgaSA9IDA7XG5cbiAgaWYgKGNlbGxzLmxlbmd0aCA+IGNvdW50KSB7XG4gICAgY2VsbHMuc3BsaWNlKGNvdW50KTtcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoY2VsbHMubGVuZ3RoIDwgY291bnQpIGNlbGxzLnB1c2goJycpO1xuICB9XG5cbiAgZm9yICg7IGkgPCBjZWxscy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGxlYWRpbmcgb3IgdHJhaWxpbmcgd2hpdGVzcGFjZSBpcyBpZ25vcmVkIHBlciB0aGUgZ2ZtIHNwZWNcbiAgICBjZWxsc1tpXSA9IGNlbGxzW2ldLnRyaW0oKS5yZXBsYWNlKC9cXFxcXFx8L2csICd8Jyk7XG4gIH1cbiAgcmV0dXJuIGNlbGxzO1xufVxuXG4vLyBSZW1vdmUgdHJhaWxpbmcgJ2Mncy4gRXF1aXZhbGVudCB0byBzdHIucmVwbGFjZSgvYyokLywgJycpLlxuLy8gL2MqJC8gaXMgdnVsbmVyYWJsZSB0byBSRURPUy5cbi8vIGludmVydDogUmVtb3ZlIHN1ZmZpeCBvZiBub24tYyBjaGFycyBpbnN0ZWFkLiBEZWZhdWx0IGZhbHNleS5cbmZ1bmN0aW9uIHJ0cmltKHN0ciwgYywgaW52ZXJ0KSB7XG4gIGlmIChzdHIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgLy8gTGVuZ3RoIG9mIHN1ZmZpeCBtYXRjaGluZyB0aGUgaW52ZXJ0IGNvbmRpdGlvbi5cbiAgdmFyIHN1ZmZMZW4gPSAwO1xuXG4gIC8vIFN0ZXAgbGVmdCB1bnRpbCB3ZSBmYWlsIHRvIG1hdGNoIHRoZSBpbnZlcnQgY29uZGl0aW9uLlxuICB3aGlsZSAoc3VmZkxlbiA8IHN0ci5sZW5ndGgpIHtcbiAgICB2YXIgY3VyckNoYXIgPSBzdHIuY2hhckF0KHN0ci5sZW5ndGggLSBzdWZmTGVuIC0gMSk7XG4gICAgaWYgKGN1cnJDaGFyID09PSBjICYmICFpbnZlcnQpIHtcbiAgICAgIHN1ZmZMZW4rKztcbiAgICB9IGVsc2UgaWYgKGN1cnJDaGFyICE9PSBjICYmIGludmVydCkge1xuICAgICAgc3VmZkxlbisrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gc3VmZkxlbik7XG59XG5cbmZ1bmN0aW9uIGZpbmRDbG9zaW5nQnJhY2tldChzdHIsIGIpIHtcbiAgaWYgKHN0ci5pbmRleE9mKGJbMV0pID09PSAtMSkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgbGV2ZWwgPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgaSsrO1xuICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBiWzBdKSB7XG4gICAgICBsZXZlbCsrO1xuICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBiWzFdKSB7XG4gICAgICBsZXZlbC0tO1xuICAgICAgaWYgKGxldmVsIDwgMCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIE1hcmtlZFxuICovXG5cbmZ1bmN0aW9uIG1hcmtlZChzcmMsIG9wdCwgY2FsbGJhY2spIHtcbiAgLy8gdGhyb3cgZXJyb3IgaW4gY2FzZSBvZiBub24gc3RyaW5nIGlucHV0XG4gIGlmICh0eXBlb2Ygc3JjID09PSAndW5kZWZpbmVkJyB8fCBzcmMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hcmtlZCgpOiBpbnB1dCBwYXJhbWV0ZXIgaXMgdW5kZWZpbmVkIG9yIG51bGwnKTtcbiAgfVxuICBpZiAodHlwZW9mIHNyYyAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ21hcmtlZCgpOiBpbnB1dCBwYXJhbWV0ZXIgaXMgb2YgdHlwZSAnXG4gICAgICArIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzcmMpICsgJywgc3RyaW5nIGV4cGVjdGVkJyk7XG4gIH1cblxuICBpZiAoY2FsbGJhY2sgfHwgdHlwZW9mIG9wdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0O1xuICAgICAgb3B0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBvcHQgPSBtZXJnZSh7fSwgbWFya2VkLmRlZmF1bHRzLCBvcHQgfHwge30pO1xuXG4gICAgdmFyIGhpZ2hsaWdodCA9IG9wdC5oaWdobGlnaHQsXG4gICAgICAgIHRva2VucyxcbiAgICAgICAgcGVuZGluZyxcbiAgICAgICAgaSA9IDA7XG5cbiAgICB0cnkge1xuICAgICAgdG9rZW5zID0gTGV4ZXIubGV4KHNyYywgb3B0KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2soZSk7XG4gICAgfVxuXG4gICAgcGVuZGluZyA9IHRva2Vucy5sZW5ndGg7XG5cbiAgICB2YXIgZG9uZSA9IGZ1bmN0aW9uKGVycikge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICBvcHQuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG91dDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgb3V0ID0gUGFyc2VyLnBhcnNlKHRva2Vucywgb3B0KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgZXJyID0gZTtcbiAgICAgIH1cblxuICAgICAgb3B0LmhpZ2hsaWdodCA9IGhpZ2hsaWdodDtcblxuICAgICAgcmV0dXJuIGVyclxuICAgICAgICA/IGNhbGxiYWNrKGVycilcbiAgICAgICAgOiBjYWxsYmFjayhudWxsLCBvdXQpO1xuICAgIH07XG5cbiAgICBpZiAoIWhpZ2hsaWdodCB8fCBoaWdobGlnaHQubGVuZ3RoIDwgMykge1xuICAgICAgcmV0dXJuIGRvbmUoKTtcbiAgICB9XG5cbiAgICBkZWxldGUgb3B0LmhpZ2hsaWdodDtcblxuICAgIGlmICghcGVuZGluZykgcmV0dXJuIGRvbmUoKTtcblxuICAgIGZvciAoOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgICAgaWYgKHRva2VuLnR5cGUgIT09ICdjb2RlJykge1xuICAgICAgICAgIHJldHVybiAtLXBlbmRpbmcgfHwgZG9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoaWdobGlnaHQodG9rZW4udGV4dCwgdG9rZW4ubGFuZywgZnVuY3Rpb24oZXJyLCBjb2RlKSB7XG4gICAgICAgICAgaWYgKGVycikgcmV0dXJuIGRvbmUoZXJyKTtcbiAgICAgICAgICBpZiAoY29kZSA9PSBudWxsIHx8IGNvZGUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiAtLXBlbmRpbmcgfHwgZG9uZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0b2tlbi50ZXh0ID0gY29kZTtcbiAgICAgICAgICB0b2tlbi5lc2NhcGVkID0gdHJ1ZTtcbiAgICAgICAgICAtLXBlbmRpbmcgfHwgZG9uZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKHRva2Vuc1tpXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgaWYgKG9wdCkgb3B0ID0gbWVyZ2Uoe30sIG1hcmtlZC5kZWZhdWx0cywgb3B0KTtcbiAgICByZXR1cm4gUGFyc2VyLnBhcnNlKExleGVyLmxleChzcmMsIG9wdCksIG9wdCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBlLm1lc3NhZ2UgKz0gJ1xcblBsZWFzZSByZXBvcnQgdGhpcyB0byBodHRwczovL2dpdGh1Yi5jb20vbWFya2VkanMvbWFya2VkLic7XG4gICAgaWYgKChvcHQgfHwgbWFya2VkLmRlZmF1bHRzKS5zaWxlbnQpIHtcbiAgICAgIHJldHVybiAnPHA+QW4gZXJyb3Igb2NjdXJyZWQ6PC9wPjxwcmU+J1xuICAgICAgICArIGVzY2FwZShlLm1lc3NhZ2UgKyAnJywgdHJ1ZSlcbiAgICAgICAgKyAnPC9wcmU+JztcbiAgICB9XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vKipcbiAqIE9wdGlvbnNcbiAqL1xuXG5tYXJrZWQub3B0aW9ucyA9XG5tYXJrZWQuc2V0T3B0aW9ucyA9IGZ1bmN0aW9uKG9wdCkge1xuICBtZXJnZShtYXJrZWQuZGVmYXVsdHMsIG9wdCk7XG4gIHJldHVybiBtYXJrZWQ7XG59O1xuXG5tYXJrZWQuZ2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgYmFzZVVybDogbnVsbCxcbiAgICBicmVha3M6IGZhbHNlLFxuICAgIGdmbTogdHJ1ZSxcbiAgICBoZWFkZXJJZHM6IHRydWUsXG4gICAgaGVhZGVyUHJlZml4OiAnJyxcbiAgICBoaWdobGlnaHQ6IG51bGwsXG4gICAgbGFuZ1ByZWZpeDogJ2xhbmd1YWdlLScsXG4gICAgbWFuZ2xlOiB0cnVlLFxuICAgIHBlZGFudGljOiBmYWxzZSxcbiAgICByZW5kZXJlcjogbmV3IFJlbmRlcmVyKCksXG4gICAgc2FuaXRpemU6IGZhbHNlLFxuICAgIHNhbml0aXplcjogbnVsbCxcbiAgICBzaWxlbnQ6IGZhbHNlLFxuICAgIHNtYXJ0TGlzdHM6IGZhbHNlLFxuICAgIHNtYXJ0eXBhbnRzOiBmYWxzZSxcbiAgICB0YWJsZXM6IHRydWUsXG4gICAgeGh0bWw6IGZhbHNlXG4gIH07XG59O1xuXG5tYXJrZWQuZGVmYXVsdHMgPSBtYXJrZWQuZ2V0RGVmYXVsdHMoKTtcblxuLyoqXG4gKiBFeHBvc2VcbiAqL1xuXG5tYXJrZWQuUGFyc2VyID0gUGFyc2VyO1xubWFya2VkLnBhcnNlciA9IFBhcnNlci5wYXJzZTtcblxubWFya2VkLlJlbmRlcmVyID0gUmVuZGVyZXI7XG5tYXJrZWQuVGV4dFJlbmRlcmVyID0gVGV4dFJlbmRlcmVyO1xuXG5tYXJrZWQuTGV4ZXIgPSBMZXhlcjtcbm1hcmtlZC5sZXhlciA9IExleGVyLmxleDtcblxubWFya2VkLklubGluZUxleGVyID0gSW5saW5lTGV4ZXI7XG5tYXJrZWQuaW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlci5vdXRwdXQ7XG5cbm1hcmtlZC5TbHVnZ2VyID0gU2x1Z2dlcjtcblxubWFya2VkLnBhcnNlID0gbWFya2VkO1xuXG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gbWFya2VkO1xufSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uKCkgeyByZXR1cm4gbWFya2VkOyB9KTtcbn0gZWxzZSB7XG4gIHJvb3QubWFya2VkID0gbWFya2VkO1xufVxufSkodGhpcyB8fCAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiBnbG9iYWwpKTtcbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGdvdG8gfSBmcm9tICdAc2FwcGVyL2FwcCc7XG5cdGltcG9ydCAqIGFzIGFwaSBmcm9tICdhcGkuanMnO1xuXG5cdGV4cG9ydCBsZXQgYXJ0aWNsZTtcblx0ZXhwb3J0IGxldCB1c2VyO1xuXG5cdCQ6IGNhbk1vZGlmeSA9IHVzZXIgJiYgYXJ0aWNsZS5hdXRob3IudXNlcm5hbWUgPT09IHVzZXIudXNlcm5hbWU7XG5cblx0YXN5bmMgZnVuY3Rpb24gcmVtb3ZlKCkge1xuXHRcdGF3YWl0IGFwaS5kZWwoYC9hcnRpY2xlcy8ke2FydGljbGUuc2x1Z31gLCB1c2VyICYmIHVzZXIudG9rZW4pO1xuXHRcdGdvdG8oJy8nKTtcblx0fVxuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJhcnRpY2xlLW1ldGFcIj5cblx0PGEgaHJlZj0nL3Byb2ZpbGUvQHthcnRpY2xlLmF1dGhvci51c2VybmFtZX0nPlxuXHRcdDxpbWcgc3JjPXthcnRpY2xlLmF1dGhvci5pbWFnZX0gYWx0PXthcnRpY2xlLmF1dGhvci51c2VybmFtZX0gLz5cblx0PC9hPlxuXG5cdDxkaXYgY2xhc3M9XCJpbmZvXCI+XG5cdFx0PGEgaHJlZj0nL3Byb2ZpbGUvQHthcnRpY2xlLmF1dGhvci51c2VybmFtZX0nIGNsYXNzPVwiYXV0aG9yXCI+IHthcnRpY2xlLmF1dGhvci51c2VybmFtZX08L2E+XG5cdFx0PHNwYW4gY2xhc3M9XCJkYXRlXCI+XG5cdFx0XHR7bmV3IERhdGUoYXJ0aWNsZS5jcmVhdGVkQXQpLnRvRGF0ZVN0cmluZygpfVxuXHRcdDwvc3Bhbj5cblx0PC9kaXY+XG5cblx0eyNpZiBjYW5Nb2RpZnl9XG5cdFx0PHNwYW4+XG5cdFx0XHQ8YSBocmVmPScvZWRpdG9yL3thcnRpY2xlLnNsdWd9JyBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgYnRuLXNtXCI+XG5cdFx0XHRcdDxpIGNsYXNzPVwiaW9uLWVkaXRcIi8+IEVkaXQgQXJ0aWNsZVxuXHRcdFx0PC9hPlxuXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBidG4tc21cIiBvbjpjbGljaz0ne3JlbW92ZX0nPlxuXHRcdFx0XHQ8aSBjbGFzcz1cImlvbi10cmFzaC1hXCIvPiBEZWxldGUgQXJ0aWNsZVxuXHRcdFx0PC9idXR0b24+XG5cdFx0PC9zcGFuPlxuXHR7L2lmfVxuPC9kaXY+IiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0ICogYXMgYXBpIGZyb20gJ2FwaS5qcyc7XG5cblx0ZXhwb3J0IGxldCBzbHVnO1xuXHRleHBvcnQgbGV0IHVzZXI7XG5cblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblxuXHRsZXQgYm9keSA9ICcnO1xuXG5cdGFzeW5jIGZ1bmN0aW9uIHN1Ym1pdChldmVudCkge1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoYGFydGljbGVzLyR7c2x1Z30vY29tbWVudHNgLCB7IGNvbW1lbnQ6IHsgYm9keSB9IH0sIHVzZXIgJiYgdXNlci50b2tlbik7XG5cblx0XHRpZiAocmVzcG9uc2UuY29tbWVudCkge1xuXHRcdFx0ZGlzcGF0Y2goJ2NvbW1lbnRlZCcsIHJlc3BvbnNlKTtcblx0XHRcdGJvZHkgPSAnJztcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48Zm9ybSBjbGFzcz1cImNhcmQgY29tbWVudC1mb3JtXCIgb246c3VibWl0fHByZXZlbnREZWZhdWx0PSd7c3VibWl0fSc+XG5cdDxkaXYgY2xhc3M9XCJjYXJkLWJsb2NrXCI+XG5cdFx0PHRleHRhcmVhIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIGNvbW1lbnQuLi5cIiBiaW5kOnZhbHVlPXtib2R5fSByb3dzPVwiM1wiLz5cblx0PC9kaXY+XG5cblx0PGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XG5cdFx0PGltZyBzcmM9e3VzZXIuaW1hZ2V9IGNsYXNzPVwiY29tbWVudC1hdXRob3ItaW1nXCIgYWx0PXt1c2VyLnVzZXJuYW1lfSA+XG5cdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+UG9zdCBDb21tZW50PC9idXR0b24+XG5cdDwvZGl2PlxuPC9mb3JtPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCAqIGFzIGFwaSBmcm9tICdhcGkuanMnO1xuXG5cdGV4cG9ydCBsZXQgY29tbWVudDtcblx0ZXhwb3J0IGxldCBzbHVnO1xuXHRleHBvcnQgbGV0IHVzZXI7XG5cblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblxuXHRhc3luYyBmdW5jdGlvbiByZW1vdmUoKSB7XG5cdFx0YXdhaXQgYXBpLmRlbChgYXJ0aWNsZXMvJHtzbHVnfS9jb21tZW50cy8ke2NvbW1lbnQuaWR9YCwgdXNlciAmJiB1c2VyLnRva2VuKTtcblx0XHRkaXNwYXRjaChcImRlbGV0ZWRcIik7XG5cdH1cbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPVwiY2FyZFwiPlxuXHQ8ZGl2IGNsYXNzPVwiY2FyZC1ibG9ja1wiPlxuXHRcdDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+e2NvbW1lbnQuYm9keX08L3A+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxuXHRcdDxhIGhyZWY9Jy9wcm9maWxlL0B7Y29tbWVudC5hdXRob3IudXNlcm5hbWV9JyBjbGFzcz1cImNvbW1lbnQtYXV0aG9yXCI+XG5cdFx0XHQ8aW1nIHNyYz17Y29tbWVudC5hdXRob3IuaW1hZ2V9IGNsYXNzPVwiY29tbWVudC1hdXRob3ItaW1nXCIgYWx0PXtjb21tZW50LmF1dGhvci51c2VybmFtZX0gLz5cblx0XHQ8L2E+XG5cblx0XHQ8YSBocmVmPScvcHJvZmlsZS9Ae2NvbW1lbnQuYXV0aG9yLnVzZXJuYW1lfScgY2xhc3M9XCJjb21tZW50LWF1dGhvclwiPntjb21tZW50LmF1dGhvci51c2VybmFtZX08L2E+XG5cblx0XHQ8c3BhbiBjbGFzcz1cImRhdGUtcG9zdGVkXCI+XG5cdFx0XHR7bmV3IERhdGUoY29tbWVudC5jcmVhdGVkQXQpLnRvRGF0ZVN0cmluZygpfVxuXHRcdDwvc3Bhbj5cblxuXHRcdHsjaWYgdXNlciAmJiBjb21tZW50LmF1dGhvci51c2VybmFtZSA9PT0gdXNlci51c2VybmFtZX1cblx0XHRcdDxzcGFuIGNsYXNzPVwibW9kLW9wdGlvbnNcIj5cblx0XHRcdFx0PGkgY2xhc3M9XCJpb24tdHJhc2gtYVwiIG9uOmNsaWNrPSd7cmVtb3ZlfSc+PC9pPlxuXHRcdFx0PC9zcGFuPlxuXHRcdHsvaWZ9XG5cdDwvZGl2PlxuPC9kaXY+IiwiPHNjcmlwdD5cblx0aW1wb3J0IExpc3RFcnJvcnMgZnJvbSAnLi4vX2NvbXBvbmVudHMvTGlzdEVycm9ycy5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tbWVudElucHV0IGZyb20gJy4vX0NvbW1lbnRJbnB1dC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tbWVudCBmcm9tICcuL19Db21tZW50LnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCBjb21tZW50cztcblx0ZXhwb3J0IGxldCBlcnJvcnM7XG5cdGV4cG9ydCBsZXQgc2x1Zztcblx0ZXhwb3J0IGxldCB1c2VyO1xuPC9zY3JpcHQ+XG5cbjxkaXYgY2xhc3M9XCJjb2wteHMtMTIgY29sLW1kLTggb2Zmc2V0LW1kLTJcIj5cblx0eyNpZiB1c2VyfVxuXHRcdDxkaXY+XG5cdFx0XHQ8TGlzdEVycm9ycyB7ZXJyb3JzfS8+XG5cdFx0XHQ8Q29tbWVudElucHV0IHtzbHVnfSB7dXNlcn0gb246Y29tbWVudGVkPSd7KHsgZGV0YWlsIH0pID0+IGNvbW1lbnRzID0gW2RldGFpbC5jb21tZW50LCAuLi5jb21tZW50c10gfScvPlxuXHRcdDwvZGl2PlxuXHR7OmVsc2V9XG5cdFx0PHA+XG5cdFx0XHQ8YSBocmVmPVwiL2xvZ2luXCI+U2lnbiBpbjwvYT4gb3IgPGEgaHJlZj1cIi9yZWdpc3RlclwiPnNpZ24gdXA8L2E+IHRvIGFkZCBjb21tZW50cyBvbiB0aGlzIGFydGljbGUuXG5cdFx0PC9wPlxuXHR7L2lmfVxuXG5cdHsjZWFjaCBjb21tZW50cyBhcyBjb21tZW50LCBpIChjb21tZW50LmlkKX1cblx0XHQ8Q29tbWVudCB7Y29tbWVudH0ge3NsdWd9IHt1c2VyfSBvbjpkZWxldGVkPSd7KCkgPT4gY29tbWVudHMgPSBjb21tZW50cy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpICE9PSBpbmRleCl9Jy8+XG5cdHsvZWFjaH1cbjwvZGl2PiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRpbXBvcnQgKiBhcyBhcGkgZnJvbSAnYXBpLmpzJztcblxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcyB9KSB7XG5cdFx0Y29uc3QgeyBzbHVnIH0gPSBwYXJhbXM7XG5cdFx0Y29uc3QgeyBhcnRpY2xlIH0gPSBhd2FpdCBhcGkuZ2V0KGBhcnRpY2xlcy8ke3BhcmFtcy5zbHVnfWAsIG51bGwpO1xuXG5cdFx0cmV0dXJuIHsgYXJ0aWNsZSwgc2x1ZyB9O1xuXHR9XG48L3NjcmlwdD5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCB7IHN0b3JlcyB9IGZyb20gJ0BzYXBwZXIvYXBwJztcblx0aW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuXG5cdGltcG9ydCBBcnRpY2xlTWV0YSBmcm9tICcuL19BcnRpY2xlTWV0YS5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tbWVudENvbnRhaW5lciBmcm9tICcuL19Db21tZW50Q29udGFpbmVyLnN2ZWx0ZSc7XG5cblx0ZXhwb3J0IGxldCBhcnRpY2xlO1xuXHRleHBvcnQgbGV0IHNsdWc7XG5cblx0Y29uc3QgeyBzZXNzaW9uIH0gPSBzdG9yZXMoKTtcblxuXHRsZXQgY29tbWVudEVycm9ycywgY29tbWVudHMgPSBbXTsgLy8gd2UnbGwgbGF6eS1sb2FkIHRoZXNlIGluIG9uTW91bnRcblx0JDogbWFya3VwID0gbWFya2VkKGFydGljbGUuYm9keSk7XG5cblx0b25Nb3VudCgoKSA9PiB7XG5cdFx0YXBpLmdldChgYXJ0aWNsZXMvJHtzbHVnfS9jb21tZW50c2ApLnRoZW4oKHJlcykgPT4ge1xuXHRcdFx0Y29tbWVudHMgPSByZXMuY29tbWVudHM7XG5cdFx0fSk7XG5cdH0pO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPnthcnRpY2xlLnRpdGxlfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGNsYXNzPVwiYXJ0aWNsZS1wYWdlXCI+XG5cblx0PGRpdiBjbGFzcz1cImJhbm5lclwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0XHRcdDxoMT57YXJ0aWNsZS50aXRsZX08L2gxPlxuXHRcdFx0PEFydGljbGVNZXRhIHthcnRpY2xlfSB1c2VyPXskc2Vzc2lvbi51c2VyfS8+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXG5cdDxkaXYgY2xhc3M9XCJjb250YWluZXIgcGFnZVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJyb3cgYXJ0aWNsZS1jb250ZW50XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29sLXhzLTEyXCI+XG5cdFx0XHRcdDxkaXY+e0BodG1sIG1hcmt1cH08L2Rpdj5cblxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJ0YWctbGlzdFwiPlxuXHRcdFx0XHRcdHsjZWFjaCBhcnRpY2xlLnRhZ0xpc3QgYXMgdGFnfVxuXHRcdFx0XHRcdFx0PGxpIGNsYXNzPVwidGFnLWRlZmF1bHQgdGFnLXBpbGwgdGFnLW91dGxpbmVcIj5cblx0XHRcdFx0XHRcdFx0e3RhZ31cblx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0ey9lYWNofVxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8aHIgLz5cblxuXHRcdDxkaXYgY2xhc3M9XCJhcnRpY2xlLWFjdGlvbnNcIj48L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxDb21tZW50Q29udGFpbmVyIHtzbHVnfSB7Y29tbWVudHN9IHVzZXI9eyRzZXNzaW9uLnVzZXJ9IGVycm9ycz17Y29tbWVudEVycm9yc30vPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6WyJ0aGlzIiwiYXBpLmRlbCIsImFwaS5wb3N0IiwiYXBp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QUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO01BQ25DLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMvRixTQUFTO0tBQ1Y7OztJQUdELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUNuQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDbkMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztNQUMzRCxTQUFTO0tBQ1Y7OztJQUdELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtNQUNqQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7TUFDbkMsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7TUFDMUIsU0FBUztLQUNWOzs7SUFHRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7TUFDbEMsR0FBRyxHQUFHLEdB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LENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDN0MsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUztVQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUN4QyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQzdDLENBQUM7T0FDSDtNQUNELE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7TUFFdkMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOztRQUUxQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1VBQy9CLElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7V0FDOUMsQ0FBQztTQUNIOztRQUVELElBQUksSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QztNQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFL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
