# b1 {} []问题

这里是{}，不是写[]，否则不能显示
（signup.js)

# b2 没写{}的问题

这里的 uid 不能直接写 uid，而是要写成{uid},因为这里是用的 prop，不然后面涉及到 transaction list 都会出问题，因为 transaction list 也有用到 uid，会对应不上
(TransactionForm.js)
