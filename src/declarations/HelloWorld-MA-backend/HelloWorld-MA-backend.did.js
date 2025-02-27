export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'AddName' : IDL.Func([IDL.Text], [], ['oneway']),
    'GreetList' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
