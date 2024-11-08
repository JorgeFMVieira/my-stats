const colors = {
    main: '#FF3B30', // Soft Red
    text: '#000000', // Black
    text2: '#FFFFFF', // Black
    secondaryText: '#757575', // Muted Gray
    background: '#FAFAFA', // Soft Off-White
  } as const; // This ensures that the values can't be accidentally changed.
  
  export type Colors = typeof colors;
  
  export default colors;
  