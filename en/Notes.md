# Questions

## q1

为什么这里使用 dispatch?
(AuthContext.js)

# Notes

## n1

这里结合 AuthContext.js 看
(useSignup.js)

## n2

这上面很多步骤和 useSignup 基本一致
(useLogout.js)

## n3

Why use cleanup function?

当 signup 后马上点击 login 会出现 error，cleanup function 是避免那种情况

(useLogout.js)

## n4

do not render components until we've checked with firebase if a user is correctly logged in
(AuthContext.js)

## n5

if we don't use a ref --> infinite loop in useEffect
\_query is an array and is "different" on every function call

(useCollection.js)

## onAuthStateChanged()

和 firebase 交互
(AuthContext.js)
