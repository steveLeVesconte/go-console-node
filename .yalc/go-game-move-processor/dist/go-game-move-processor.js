var v = Object.defineProperty;
var y = (e, t, r) => t in e ? v(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var s = (e, t, r) => (y(e, typeof t != "symbol" ? t + "" : t, r), r);
const c = "b", h = "w", f = "_", g = "pass", P = "exit";
class T {
  constructor(t, r, o) {
    s(this, "strinColor");
    s(this, "row");
    s(this, "col");
    s(this, "group", null);
    s(this, "liberties", null);
    s(this, "adjacentIntersections", []);
    this.row = t, this.col = r, this.strinColor = o, this.intialize();
  }
  intialize() {
    this.row > 0 && this.adjacentIntersections.push({ row: this.row - 1, col: this.col }), this.row < 18 && this.adjacentIntersections.push({ row: this.row + 1, col: this.col }), this.col > 0 && this.adjacentIntersections.push({ row: this.row, col: this.col - 1 }), this.col < 18 && this.adjacentIntersections.push({ row: this.row, col: this.col + 1 });
  }
}
class I {
  constructor(t) {
    s(this, "stoneColor");
    s(this, "liberties", 0);
    s(this, "libertiesSet", /* @__PURE__ */ new Set());
    s(this, "intersections", []);
    this.stoneColor = t;
  }
}
class O {
  constructor(t) {
    s(this, "board");
    s(this, "stoneGroups", []);
    this.board = this.populateGoBoard(t), this.applyGroupAnIntersectionToBoard();
  }
  populateGoBoard(t) {
    const r = [];
    for (let o = 0; o < 19; o++) {
      const n = [];
      for (let i = 0; i < 19; i++)
        n[i] = new T(o, i, t[o][i]);
      r.push(n);
    }
    return r;
  }
  groupAnIntersection(t, r, o) {
    let n = null;
    t.group || t.strinColor === r && (o ? (n = o, t.group = o, n.intersections.push(t)) : (n = new I(r), n.intersections.push(t), this.stoneGroups.push(n)), t.group = n, t.adjacentIntersections.forEach((i) => {
      const u = this.board[i.row][i.col];
      u.strinColor === f && (n.liberties++, n == null || n.libertiesSet.add(u.row.toString().padStart(2, "0") + u.col.toString().padStart(2, "0"))), this.groupAnIntersection(u, r, n);
    }));
  }
  applyGroupAnIntersectionToBoard() {
    for (const t of this.board)
      for (const r of t)
        r.strinColor !== f && !r.group && this.groupAnIntersection(r, r.strinColor, null);
  }
}
class d {
  constructor() {
    s(this, "isValidSubmission", !1);
    s(this, "isLegalPlay", !1);
    s(this, "newBoard", []);
    s(this, "newKoCompareBoard", []);
    s(this, "capturedStones", 0);
    s(this, "isAtari", !1);
    s(this, "isKo", !1);
    s(this, "isSuicide", !1);
    s(this, "isCollision", !1);
    s(this, "isPass", !1);
    s(this, "isExit", !1);
    s(this, "reasonSubmissionInvalid", "");
    s(this, "stonePlay", null);
    s(this, "stoneColorOfNextTurn", "");
  }
}
class l extends d {
  constructor(t, r, o, n) {
    super(), this.isValidSubmission = !1, this.isLegalPlay = !1, this.newBoard = t, this.newKoCompareBoard = r, this.capturedStones = 0, this.isAtari = !1, this.isKo = !1, this.isSuicide = !1, this.isCollision = !1, this.isPass = !1, this.isExit = !1, this.stonePlay = n.stonePlay, this.reasonSubmissionInvalid = o, this.stoneColorOfNextTurn = n.stoneColorOfThisTurn;
  }
}
class x extends d {
  constructor(t, r, o) {
    super(), this.isValidSubmission = !0, this.isLegalPlay = !0, this.newBoard = t, this.newKoCompareBoard = r, this.capturedStones = 0, this.isAtari = !1, this.isKo = !1, this.isSuicide = !1, this.isCollision = !1, this.isPass = !0, this.isExit = !1, this.reasonSubmissionInvalid = "", this.stoneColorOfNextTurn = o.stoneColorOfThisTurn == c ? h : c;
  }
}
class A extends d {
  constructor() {
    super(), this.isExit = !0;
  }
}
class N extends d {
  constructor(t, r, o, n, i) {
    super(), this.isValidSubmission = !0, this.isLegalPlay = !0, this.newBoard = t, this.newKoCompareBoard = r, this.capturedStones = o, this.isAtari = n, this.isKo = !1, this.isSuicide = !1, this.isCollision = !1, this.isPass = !1, this.isExit = !1, this.reasonSubmissionInvalid = "", this.stonePlay = i.stonePlay, this.stoneColorOfNextTurn = i.stoneColorOfThisTurn == c ? h : c;
  }
}
class G extends d {
  constructor(t, r, o) {
    super(), this.isValidSubmission = !0, this.isLegalPlay = !1, this.newBoard = t, this.newKoCompareBoard = r, this.capturedStones = 0, this.isAtari = !1, this.isKo = !0, this.isSuicide = !1, this.isCollision = !1, this.isPass = !1, this.isExit = !1, this.reasonSubmissionInvalid = "", this.stonePlay = o.stonePlay, this.stoneColorOfNextTurn = o.stoneColorOfThisTurn;
  }
}
class R extends d {
  constructor(t, r, o) {
    super(), this.isValidSubmission = !0, this.isLegalPlay = !1, this.newBoard = t, this.newKoCompareBoard = r, this.capturedStones = 0, this.isAtari = !1, this.isKo = !1, this.isSuicide = !0, this.isCollision = !1, this.isPass = !1, this.isExit = !1, this.reasonSubmissionInvalid = "", this.stonePlay = o.stonePlay, this.stoneColorOfNextTurn = o.stoneColorOfThisTurn;
  }
}
class a {
  constructor(t = !1, r) {
    this.submissionHandled = t, this.submissionResult = r;
  }
}
function F(e) {
  if (e.actionType == P)
    return new A();
  if (e.actionType == g)
    return new x(e.currentBoard, e.currentBoard, e);
  let t = E(e);
  return t.submissionHandled || (t = V(e), t.submissionHandled) || (t = D(e), t.submissionHandled) ? t.submissionResult : K(e).submissionResult;
}
function K(e) {
  const t = k(e), r = new O(t), o = e.stoneColorOfThisTurn === h ? c : h, n = S(r.stoneGroups, o), i = C(n);
  if (j(i, r, e))
    return new a(!0, new R(e.currentBoard, e.previousBoard, e));
  const u = Y(t, i);
  return J(t, e.previousBoard) ? new a(!0, new G(e.currentBoard, e.previousBoard, e)) : new a(!0, new N(t, e.currentBoard, u, L(n), e));
}
function E(e) {
  const t = e.stonePlay;
  if (t.col > 18 || t.col < 0) {
    const r = new l(e.currentBoard, e.previousBoard, `Invalid value in stonePlay col: ${t.col} `, e);
    return new a(!0, r);
  }
  if (t.row > 18 || t.row < 0) {
    const r = new l(e.currentBoard, e.previousBoard, `Invalid value in stonePlay row: ${t.row} `, e);
    return new a(!0, r);
  }
  if (W(e.currentBoard, e.stonePlay)) {
    const r = new l(e.currentBoard, e.previousBoard, `Invalid value in stone play - target intersection is : ${t.row}, ${t.col}`, e);
    return r.isCollision = !0, new a(!0, r);
  }
  return new a(!1, new l(e.currentBoard, e.previousBoard, "Sumission Not Yet Handled", e));
}
function V(e) {
  if (H(e.currentBoard, "w") < 3)
    return new a(!1, new l(e.currentBoard, e.previousBoard, "Sumission Not Yet Handled", e));
  if (e.previousBoard == null) {
    const o = new l(e.currentBoard, e.previousBoard, "Missing Previous Board for Ko Compare", e);
    return new a(!0, o);
  }
  if (!w(e.previousBoard)) {
    const o = new l(e.currentBoard, e.previousBoard, "Previous Board dimensions are not valid", e);
    return new a(!0, o);
  }
  if (B(e.previousBoard)) {
    const o = new l(e.currentBoard, e.previousBoard, "Previous Board contains invalid entries", e);
    return new a(!0, o);
  }
  return new a(!1, new l(e.currentBoard, e.previousBoard, "Sumission Not Yet Handled", e));
}
function D(e) {
  if (e.currentBoard == null) {
    const r = new l(e.currentBoard, e.previousBoard, "Missing Current Board in submision", e);
    return new a(!0, r);
  }
  if (!w(e.currentBoard)) {
    const r = new l(e.currentBoard, e.previousBoard, "Missing Current Board dimensions are not valid", e);
    return new a(!0, r);
  }
  if (B(e.currentBoard)) {
    const r = new l(e.currentBoard, e.previousBoard, "Current Board contains invalid entries", e);
    return new a(!0, r);
  }
  return new a(!1, new l(e.currentBoard, e.previousBoard, "Sumission Not Yet Handled", e));
}
function w(e) {
  for (const o of e)
    if (o.length !== 19)
      return !1;
  return e.length === 19;
}
function B(e) {
  return e.reduce((t, r) => t + r.reduce((o, n) => o + ([h, c, f].includes(n) ? 0 : 1), 0), 0);
}
function H(e, t) {
  return e.reduce((r, o) => r + o.reduce((n, i) => n + (i === t ? 1 : 0), 0), 0);
}
function L(e) {
  const t = _(e);
  return z(t).length > 0;
}
function j(e, t, r) {
  if (e.length < 1) {
    const o = S(t.stoneGroups, r.stoneColorOfThisTurn);
    if (C(o).length > 0)
      return !0;
  }
  return !1;
}
function k(e) {
  const t = M(e.currentBoard);
  return t[e.stonePlay.row][e.stonePlay.col] = e.stoneColorOfThisTurn, t;
}
function M(e) {
  return JSON.parse(JSON.stringify(e));
}
function S(e, t) {
  return e.filter((r) => r.stoneColor === t);
}
function C(e) {
  return e.filter((t) => t.libertiesSet.size < 1);
}
function _(e) {
  return e.filter((t) => t.libertiesSet.size > 0);
}
function z(e) {
  return e.filter((t) => t.liberties === 1);
}
function Y(e, t) {
  let r = 0;
  for (const o of t)
    for (const n of o.intersections)
      e[n.row][n.col] = f, r++;
  return r;
}
function J(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function W(e, t) {
  return e[t.row][t.col] !== f;
}
class Q {
  constructor(t, r) {
    s(this, "row");
    s(this, "col");
    this.col = r, this.row = t;
  }
  //  readonly stoneColor: string
}
class X {
  constructor(t, r, o, n, i) {
    s(this, "previousBoard");
    s(this, "currentBoard");
    s(this, "stonePlay");
    s(this, "actionType");
    s(this, "stoneColorOfThisTurn");
    this.stonePlay = t, this.currentBoard = o, this.previousBoard = r, this.actionType = n, this.stoneColorOfThisTurn = i;
  }
}
function q(e) {
  const t = e.split(" ").join("").split(","), r = [];
  for (let o = 0; o < t.length; o++) {
    const n = t[o], i = Array.from(n), u = [];
    for (let p = 0; p < n.length; p++)
      u.push(i[p]);
    r.push(u);
  }
  return r;
}
export {
  d as BaseSubmissionResult,
  Q as StonePlay,
  X as Submission,
  F as evaluateSubmission,
  q as stringBoardToArray
};
