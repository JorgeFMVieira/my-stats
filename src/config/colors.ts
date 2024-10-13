const colors = {
    main: '#E57373', // Soft Red
    text: '#F5F5F5', // Soft White
    secondaryText: '#757575', // Muted Gray
    background: '#FAFAFA', // Soft Off-White
    neutral: '#BDBDBD', // Light Gray
  } as const; // This ensures that the values can't be accidentally changed.
  
  export type Colors = typeof colors;
  
  export default colors;
  