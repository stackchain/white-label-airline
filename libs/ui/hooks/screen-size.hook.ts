import { useTheme, useMediaQuery, Theme } from '@material-ui/core';

export function IsScreenSizeSm() {
  const theme: Theme = useTheme();

  return useMediaQuery(theme.breakpoints.down('sm'));
}

export function IsScreenSizeMd() {
  const theme: Theme = useTheme();

  return useMediaQuery(theme.breakpoints.between('sm', 'md'));
}

export function IsScreenSizeLg() {
  const theme: Theme = useTheme();

  return useMediaQuery(theme.breakpoints.between('md', 'lg'));
}

export function IsScreenSizeXl() {
  const theme: Theme = useTheme();

  return useMediaQuery(theme.breakpoints.up('lg'));
}
