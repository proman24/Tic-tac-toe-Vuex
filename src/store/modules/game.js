export const state = {
    scores:{"X":0,"O":0},
    turn:"O",
    board:[["", "", ""], ["", "", ""], ["", "", ""]],
    end:false,
    winner:null,
    turnCount:0,
    draw:false
}

export const mutations = {
    ALTER_TURN(state){
        if (state.turn == "O")
            state.turn = "X"
        else
            state.turn = "O"
        state.turnCount++
    },
    MAKE_MOVE(state, {row, col}){
        state.board[row-1][col-1] = state.turn
    },
    END_GAME(state){
        state.end = true
    },
    SET_WINNER(state, winner){
        state.scores[winner]++
        state.winner = winner
    },
    RESET_GAME(state){
        state.board=[["", "", ""], ["", "", ""], ["", "", ""]]
        state.end=false
        state.winner=null
        state.turn="O"
        state.turnCount=0
        state.draw = false
    }
}

export const actions = {
    checkWin({ state }){
        // Horizontal Line Check
        for (var i=0; i<3;i++){
            row = state.board[i].filter(x => x!="")

            if (row.length !=3){
                continue
            }

            if ((new Set(state.board[i])).size == 1){
                return state.board[i][0]
            }
        }

        // Vertical Line Check
        var tBoard = state.board[0].map((col, i) => state.board.map(row => row[i]));
        for (i=0; i<3;i++){
            var row = tBoard[i].filter(x => x!="")

            if (row.length !=3){
                continue
            }

            if ((new Set(tBoard[i])).size == 1){
                return tBoard[i][0]
            }
        }

        // Diagonal Line Check
        var vals = [state.board[0][0], state.board[1][1], state.board[2][2]]
        if ((new Set(vals)).size == 1){
            return vals[0]
        }

        // Reverse Diagonal Line Check
        vals = [state.board[0][2], state.board[1][1], state.board[2][0]]
        if ((new Set(vals)).size == 1){
            return vals[0]
        }

        return false
    },
    move({ commit, state, dispatch}, {row, col}){
        
        if (state.board[row-1][col-1] != "" | state.end){
            return false
        }

        commit("MAKE_MOVE", {row, col})
        commit("ALTER_TURN")

        dispatch("checkWin").then( winner => {
            if (winner){
                commit("END_GAME")
                commit("SET_WINNER",winner)
                dispatch("resetGame")
                return
            }
            else
                if (state.turnCount == 9){
                    state.draw = true
                    dispatch("resetGame")
                }
                return 
        })
    },
    resetGame({commit}){
        setTimeout(() => {
            commit("RESET_GAME")
        },5000)
    }
}

export const getters = {
    player(state){
        return state.turn
    },
    board(state){
        return state.board
    },
    winner(state){
        return state.winner
    },
    xScore(state){
        return state.scores["X"]
    },
    oScore(state){
        return state.scores["O"]
    },
    draw(state){
        return state.draw
    }
}