import {ActionType, createAction, createReducer} from "typesafe-actions";

const SET_LANGUAGE = 'language/SET_LANGUAGE' as const;

export interface ILanguageState {
    language: string,

};

const initialState : ILanguageState = {
     language: 'ko',
};

export const setLanguage = createAction(SET_LANGUAGE, (language : string) => language)();

const actions = {setLanguage};
type LanguageAction = ActionType<typeof actions>;

const languageReducer = createReducer<ILanguageState, LanguageAction>(initialState, {
   [SET_LANGUAGE]: (state, {payload: language}) => ({
       ...state,
       language: language,
   }),

});


export default languageReducer;


