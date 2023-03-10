import styled from "styled-components";

export default function Button({
  iconName,
  children,
  onClick,
  type = "button",
  variant = "PRIMARY",
  iconType,
  animateIconSize,
  animateIconDown,
  animateIconLeft,
  animateIconRight,
  ...restProps
}) {
  switch (variant) {
    case "ICON":
      return (
        <IconButton
          onClick={onClick}
          iconType={iconType}
          animateIconSize={animateIconSize}
          animateIconDown={animateIconDown}
          animateIconLeft={animateIconLeft}
          animateIconRight={animateIconRight}
          {...restProps}
        >
          {children}
        </IconButton>
      );

    case "SECONDARY":
      return (
        <SecondaryButton onClick={onClick} type={type} {...restProps}>
          {children}
        </SecondaryButton>
      );

    default:
      return (
        <PrimaryButton onClick={onClick} type={type} {...restProps}>
          {children}
        </PrimaryButton>
      );
  }
}

const Base = styled.button`
  padding: 0.5em 1.2em;
  cursor: pointer;
  transition: all 300ms;
  &:disabled {
    cursor: auto;
    color: ${(props) => props.theme.colors.disabled};
  }
`;

const PrimaryButton = styled(Base)`
  border: none;
  color: ${(props) => props.theme.colors.bg};
  background-color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.isActive && props.theme.colors.text};

  &:hover {
    background-color: ${(props) => props.theme.colors.text};
  }
`;

const SecondaryButton = styled(Base)`
  padding: 1em 2em;
  border-radius: 5px;
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSize.xl1};
  background-color: ${(props) => props.theme.colors.bg};
  border: 2px solid ${(props) => props.theme.colors.primary};

  &:hover {
    color: ${(props) => props.theme.colors.bg};
    background-color: ${(props) => props.theme.colors.primary};
  }
`;

const IconButton = styled(Base)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0em;
  background: none;
  border: none;
  ${(props) =>
    props.iconType === "image" &&
    `width: 68px;
     height: 60px;
     border-radius: 4px;
     box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.25);`}

  color: ${(props) => props.theme.colors.text};
  transition: transform 200ms;
  font-size: ${(props) => props.theme.fontSize.xl2};

  & img {
    display: block;
    padding: 0;
    margin: 0;
  }

  &:hover {
    transform: ${(props) => props.animateIconSize && "scale(110%)"};
    transform: ${(props) => props.animateIconLeft && "translateX(-10%)"};
    transform: ${(props) => props.animateIconRight && "translateX(10%)"};
    transform: ${(props) => props.animateIconDown && "translateY(10%)"};
  }

  //  overwrite color and transform from hover
  &:disabled {
    color: ${(props) => props.theme.colors.disabled};
    transform: translateX(0);
    transform: translateY(0);
  }

  @media (min-width: ${(props) => props.theme.bp.sm}) {
    ${(props) =>
      props.iconType === "image" &&
      `width: 88px;
       height: 80px;
       border-radius: 3px;`}
  }
`;
