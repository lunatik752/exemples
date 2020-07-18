import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should changed value to opposite value', () => {
        //data
        const state: StateType = {
            collapsed: true
        }

        //action
        const newState = reducer(state, {type: TOGGLE_COLLAPSED})

        //expectation
        expect(newState.collapsed).toBe(false)
    }
)


test('reducer should changed value to opposite value', () => {
        //data
        const state: StateType = {
            collapsed: false
        }

        //action
        const newState = reducer(state, {type: TOGGLE_COLLAPSED})

        //expectation
        expect(newState.collapsed).toBe(true)
    }
)

test('incorrect action type, reducer should throw error', () => {
        //data
        const state: StateType = {
            collapsed: false
        }

        //expectation
        expect(() => {
            reducer(state, {type: 'FAKE_TYPE'})
        }).toThrowError()
    }
)