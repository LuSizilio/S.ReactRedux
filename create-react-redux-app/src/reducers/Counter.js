export const clickCounter = (state = 0, action) => {
    switch (action.type) {
      case 'Adicionar':
        return state +1;
      case 'Subtrair':
        return state -1;
      default:
        return state;
    }
};