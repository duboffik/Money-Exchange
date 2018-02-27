// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    else {
        if (currency<0) {
            return {};
        }
        else {
            var H, Q, D, N, P, restAfter50, restAfter25, restAfter10, restAfter5;
            var myHash = {};
            restAfter50 = currency%50;
            H = (currency-restAfter50)/50;
            restAfter25 = restAfter50%25;
            Q = (restAfter50 - restAfter25)/25;
            restAfter10 = restAfter25%10;
            D = (restAfter25 - restAfter10)/10;
            restAfter5 = restAfter10%5;
            N = (restAfter10 - restAfter5)/5;
            P = restAfter5;
            if (H) {
                myHash['H'] = H;
            }
            if (Q) {
                myHash['Q'] = Q;
            }
            if (D) {
                myHash['D'] = D;
            }
            if (N) {
                myHash['N'] = N;
            }
            if (P) {
                myHash['P'] = P;
            }
        }
    }

    return myHash;
}
