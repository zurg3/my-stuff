#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main()
{
  // variables
  int x, y;
  int game_mode;
  int turn, turn2;
  char player_type;

  // game field as multidimensional array
  char field [3][3] = {{}};

  // enemy selection
  cout << "Select your enemy: human[1] or AI[2]: ";
  cin >> game_mode;

  // vs. human
  if (game_mode == 1)
  {
    turn = 0;
    while (
      ((field[0][0] != 'x') || (field[1][0] != 'x') || (field[2][0] != 'x'))
      && ((field[0][0] != 'x') || (field[0][1] != 'x') || (field[0][2] != 'x'))
      && ((field[0][0] != 'x') || (field[1][1] != 'x') || (field[2][2] != 'x'))
      && ((field[0][2] != 'x') || (field[1][1] != 'x') || (field[2][0] != 'x'))
      && ((field[0][1] != 'x') || (field[1][1] != 'x') || (field[2][1] != 'x'))
      && ((field[0][2] != 'x') || (field[1][2] != 'x') || (field[2][2] != 'x'))
      && ((field[1][0] != 'x') || (field[1][1] != 'x') || (field[1][2] != 'x'))
      && ((field[2][0] != 'x') || (field[2][1] != 'x') || (field[2][2] != 'x'))
      && ((field[0][0] != 'o') || (field[0][1] != 'o') || (field[0][2] != 'o'))
      && ((field[0][0] != 'o') || (field[1][1] != 'o') || (field[2][2] != 'o'))
      && ((field[0][2] != 'o') || (field[1][1] != 'o') || (field[2][0] != 'o'))
      && ((field[0][1] != 'o') || (field[1][1] != 'o') || (field[2][1] != 'o'))
      && ((field[0][2] != 'o') || (field[1][2] != 'o') || (field[2][2] != 'o'))
      && ((field[1][0] != 'o') || (field[1][1] != 'o') || (field[1][2] != 'o'))
      && ((field[2][0] != 'o') || (field[2][1] != 'o') || (field[2][2] != 'o'))
      && ((field[2][0] != 'o') || (field[2][1] != 'o') || (field[2][2] != 'o'))
    )
    {
      turn2 = turn % 2;

      // x turn
      if (turn2 == 0)
      {
        cout << "X turns..." << endl;
        cout << "Enter coordinates of your turn [x] [y]: ";
        cin >> x >> y;
        x = x - 1;
        y = y - 1;
        if ((field[x][y] != 'o') && (field[x][y] != 'x'))
        {
          field[x][y] = 'x';
          turn = turn + 1;
        }
        else
        {
          cout << "This coordinate already in use!" << endl;
        }
        for (x = 0; x < 3; x++)
        {
          for (y = 0; y < 3; y++)
          {
            cout << "[" << field[x][y] << "]";
          }
          cout << endl;
        }
        cout << endl;
      }

      // o turn
      else if (turn2 == 1)
      {
        cout << "O turns..." << endl;
        cout << "Enter coordinates of your turn [x] [y]: ";
        cin >> x >> y;
        x = x - 1;
        y = y - 1;
        if ((field[x][y] != 'x') && (field[x][y] != 'o'))
        {
          field[x][y] = 'o';
          turn = turn + 1;
        }
        else
        {
          cout << "This coordinate already in use!" << endl;
        }
        for (x = 0; x < 3; x++)
        {
          for (y = 0; y < 3; y++)
          {
            cout << "[" << field[x][y] << "]";
          }
          cout << endl;
        }
        cout << endl;
      }
    }

    // victory condition
    if (turn2 == 0)
    {
      cout << "X wins!" << endl;
    }
    else if (turn2 == 1)
    {
      cout << "O wins!" << endl;
    }

    // output of winning field
    for (x = 0; x < 3; x++)
    {
      for (y = 0; y < 3; y++)
      {
        if ((field[0][0] == 'x') && (field[1][0] == 'x') && (field[2][0] == 'x'))
        {
          if ((x == 0 && y == 0) || (x == 1 && y == 0) || (x == 2 && y == 0))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][0] == 'x') && (field[0][1] == 'x') && (field[0][2] == 'x'))
        {
          if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 0 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][0] == 'x') && (field[1][1] == 'x') && (field[2][2] == 'x'))
        {
          if ((x == 0 && y == 0) || (x == 1 && y == 1) || (x == 2 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][2] == 'x') && (field[1][1] == 'x') && (field[2][0] == 'x'))
        {
          if ((x == 0 && y == 2) || (x == 1 && y == 1) || (x == 2 && y == 0))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][1] == 'x') && (field[1][1] == 'x') && (field[2][1] == 'x'))
        {
          if ((x == 0 && y == 1) || (x == 1 && y == 1) || (x == 2 && y == 1))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][2] == 'x') && (field[1][2] == 'x') && (field[2][2] == 'x'))
        {
          if ((x == 0 && y == 2) || (x == 1 && y == 2) || (x == 2 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[1][0] == 'x') && (field[1][1] == 'x') && (field[1][2] == 'x'))
        {
          if ((x == 1 && y == 0) || (x == 1 && y == 1) || (x == 1 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[2][0] == 'x') && (field[2][1] == 'x') && (field[2][2] == 'x'))
        {
          if ((x == 2 && y == 0) || (x == 2 && y == 1) || (x == 2 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][0] == 'o') && (field[1][0] == 'o') && (field[2][0] == 'o'))
        {
          if ((x == 0 && y == 0) || (x == 1 && y == 0) || (x == 2 && y == 0))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][0] == 'o') && (field[0][1] == 'o') && (field[0][2] == 'o'))
        {
          if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 0 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][0] == 'o') && (field[1][1] == 'o') && (field[2][2] == 'o'))
        {
          if ((x == 0 && y == 0) || (x == 1 && y == 1) || (x == 2 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][2] == 'o') && (field[1][1] == 'o') && (field[2][0] == 'o'))
        {
          if ((x == 0 && y == 2) || (x == 1 && y == 1) || (x == 2 && y == 0))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][1] == 'o') && (field[1][1] == 'o') && (field[2][1] == 'o'))
        {
          if ((x == 0 && y == 1) || (x == 1 && y == 1) || (x == 2 && y == 1))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[0][2] == 'o') && (field[1][2] == 'o') && (field[2][2] == 'o'))
        {
          if ((x == 0 && y == 2) || (x == 1 && y == 2) || (x == 2 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[1][0] == 'o') && (field[1][1] == 'o') && (field[1][2] == 'o'))
        {
          if ((x == 1 && y == 0) || (x == 1 && y == 1) || (x == 1 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
        else if ((field[2][0] == 'o') && (field[2][1] == 'o') && (field[2][2] == 'o'))
        {
          if ((x == 2 && y == 0) || (x == 2 && y == 1) || (x == 2 && y == 2))
          {
            cout << "(" << field[x][y] << ")";
          }
          else
          {
            cout << "[" << field[x][y] << "]";
          }
        }
      }
      cout << endl;
    }
  }

  // vs. AI
  else if (game_mode == 2)
  {
    // player selection
    cout << "Select x or o: ";
    cin >> player_type;

    // x (human) vs. o (AI)
    if (player_type == 'x')
    {
      turn = 0;
      srand(time(NULL));
      while (
        ((field[0][0] != 'x') || (field[1][0] != 'x') || (field[2][0] != 'x'))
        && ((field[0][0] != 'x') || (field[0][1] != 'x') || (field[0][2] != 'x'))
        && ((field[0][0] != 'x') || (field[1][1] != 'x') || (field[2][2] != 'x'))
        && ((field[0][2] != 'x') || (field[1][1] != 'x') || (field[2][0] != 'x'))
        && ((field[0][1] != 'x') || (field[1][1] != 'x') || (field[2][1] != 'x'))
        && ((field[0][2] != 'x') || (field[1][2] != 'x') || (field[2][2] != 'x'))
        && ((field[1][0] != 'x') || (field[1][1] != 'x') || (field[1][2] != 'x'))
        && ((field[2][0] != 'x') || (field[2][1] != 'x') || (field[2][2] != 'x'))
        && ((field[0][0] != 'o') || (field[0][1] != 'o') || (field[0][2] != 'o'))
        && ((field[0][0] != 'o') || (field[1][1] != 'o') || (field[2][2] != 'o'))
        && ((field[0][2] != 'o') || (field[1][1] != 'o') || (field[2][0] != 'o'))
        && ((field[0][1] != 'o') || (field[1][1] != 'o') || (field[2][1] != 'o'))
        && ((field[0][2] != 'o') || (field[1][2] != 'o') || (field[2][2] != 'o'))
        && ((field[1][0] != 'o') || (field[1][1] != 'o') || (field[1][2] != 'o'))
        && ((field[2][0] != 'o') || (field[2][1] != 'o') || (field[2][2] != 'o'))
        && ((field[2][0] != 'o') || (field[2][1] != 'o') || (field[2][2] != 'o'))
      )
      {
        turn2 = turn % 2;

        // x turn (human)
        if (turn2 == 0)
        {
          if (turn == 0)
          {
            cout << "X turns..." << endl;
          }
          cout << "Enter coordinates of your turn [x] [y]: ";
          cin >> x >> y;
          x = x - 1;
          y = y - 1;
          if ((field[x][y] != 'o') && (field[x][y] != 'x'))
          {
            field[x][y] = 'x';
            turn = turn + 1;
          }
          else
          {
            cout << "This coordinate already in use!" << endl;
          }
          for (x = 0; x < 3; x++)
          {
            for (y = 0; y < 3; y++)
            {
              cout << "[" << field[x][y] << "]";
            }
            cout << endl;
          }
          cout << endl;
          cout << "O turns..." << endl;
        }

        // o turn (AI)
        else if (turn2 == 1)
        {
          x = 0 + rand() % 3;
          y = 0 + rand() % 3;
          if ((field[x][y] != 'x') && (field[x][y] != 'o'))
          {
            field[x][y] = 'o';
            turn = turn + 1;
            for (x = 0; x < 3; x++)
            {
              for (y = 0; y < 3; y++)
              {
                cout << "[" << field[x][y] << "]";
              }
              cout << endl;
            }
            cout << endl;
            cout << "X turns..." << endl;
          }
        }
      }

      // victory condition
      if (turn2 == 0)
      {
        cout << "X wins!" << endl;
      }
      else if (turn2 == 1)
      {
        cout << "O wins!" << endl;
      }

      // output of winning field
      for (x = 0; x < 3; x++)
      {
        for (y = 0; y < 3; y++)
        {
          if ((field[0][0] == 'x') && (field[1][0] == 'x') && (field[2][0] == 'x'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 0) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'x') && (field[0][1] == 'x') && (field[0][2] == 'x'))
          {
            if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 0 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'x') && (field[1][1] == 'x') && (field[2][2] == 'x'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'x') && (field[1][1] == 'x') && (field[2][0] == 'x'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 1) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][1] == 'x') && (field[1][1] == 'x') && (field[2][1] == 'x'))
          {
            if ((x == 0 && y == 1) || (x == 1 && y == 1) || (x == 2 && y == 1))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'x') && (field[1][2] == 'x') && (field[2][2] == 'x'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 2) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[1][0] == 'x') && (field[1][1] == 'x') && (field[1][2] == 'x'))
          {
            if ((x == 1 && y == 0) || (x == 1 && y == 1) || (x == 1 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[2][0] == 'x') && (field[2][1] == 'x') && (field[2][2] == 'x'))
          {
            if ((x == 2 && y == 0) || (x == 2 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'o') && (field[1][0] == 'o') && (field[2][0] == 'o'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 0) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'o') && (field[0][1] == 'o') && (field[0][2] == 'o'))
          {
            if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 0 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'o') && (field[1][1] == 'o') && (field[2][2] == 'o'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'o') && (field[1][1] == 'o') && (field[2][0] == 'o'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 1) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][1] == 'o') && (field[1][1] == 'o') && (field[2][1] == 'o'))
          {
            if ((x == 0 && y == 1) || (x == 1 && y == 1) || (x == 2 && y == 1))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'o') && (field[1][2] == 'o') && (field[2][2] == 'o'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 2) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[1][0] == 'o') && (field[1][1] == 'o') && (field[1][2] == 'o'))
          {
            if ((x == 1 && y == 0) || (x == 1 && y == 1) || (x == 1 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[2][0] == 'o') && (field[2][1] == 'o') && (field[2][2] == 'o'))
          {
            if ((x == 2 && y == 0) || (x == 2 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
        }
        cout << endl;
      }
    }

    // x (AI) vs. o (human)
    else if (player_type == 'o')
    {
      turn = 0;
      srand(time(NULL));
      while (
        ((field[0][0] != 'x') || (field[1][0] != 'x') || (field[2][0] != 'x'))
        && ((field[0][0] != 'x') || (field[0][1] != 'x') || (field[0][2] != 'x'))
        && ((field[0][0] != 'x') || (field[1][1] != 'x') || (field[2][2] != 'x'))
        && ((field[0][2] != 'x') || (field[1][1] != 'x') || (field[2][0] != 'x'))
        && ((field[0][1] != 'x') || (field[1][1] != 'x') || (field[2][1] != 'x'))
        && ((field[0][2] != 'x') || (field[1][2] != 'x') || (field[2][2] != 'x'))
        && ((field[1][0] != 'x') || (field[1][1] != 'x') || (field[1][2] != 'x'))
        && ((field[2][0] != 'x') || (field[2][1] != 'x') || (field[2][2] != 'x'))
        && ((field[0][0] != 'o') || (field[0][1] != 'o') || (field[0][2] != 'o'))
        && ((field[0][0] != 'o') || (field[1][1] != 'o') || (field[2][2] != 'o'))
        && ((field[0][2] != 'o') || (field[1][1] != 'o') || (field[2][0] != 'o'))
        && ((field[0][1] != 'o') || (field[1][1] != 'o') || (field[2][1] != 'o'))
        && ((field[0][2] != 'o') || (field[1][2] != 'o') || (field[2][2] != 'o'))
        && ((field[1][0] != 'o') || (field[1][1] != 'o') || (field[1][2] != 'o'))
        && ((field[2][0] != 'o') || (field[2][1] != 'o') || (field[2][2] != 'o'))
        && ((field[2][0] != 'o') || (field[2][1] != 'o') || (field[2][2] != 'o'))
      )
      {
        turn2 = turn % 2;

        // x turn (AI)
        if (turn2 == 0)
        {
          if (turn == 0)
          {
            cout << "X turns..." << endl;
          }
          x = 0 + rand() % 3;
          y = 0 + rand() % 3;
          if ((field[x][y] != 'o') && (field[x][y] != 'x'))
          {
            field[x][y] = 'x';
            turn = turn + 1;
            for (x = 0; x < 3; x++)
            {
              for (y = 0; y < 3; y++)
              {
                cout << "[" << field[x][y] << "]";
              }
              cout << endl;
            }
            cout << endl;
            cout << "O turns..." << endl;
          }
        }

        // o turn (human)
        else if (turn2 == 1)
        {
          cout << "Enter coordinates of your turn [x] [y]: ";
          cin >> x >> y;
          x = x - 1;
          y = y - 1;
          if ((field[x][y] != 'x') && (field[x][y] != 'o'))
          {
            field[x][y] = 'o';
            turn = turn + 1;
          }
          else
          {
            cout << "This coordinate already in use!" << endl;
          }
          for (x = 0; x < 3; x++)
          {
            for (y = 0; y < 3; y++)
            {
              cout << "[" << field[x][y] << "]";
            }
            cout << endl;
          }
          cout << endl;
          cout << "X turns..." << endl;
        }
      }

      // victory condition
      if (turn2 == 0)
      {
        cout << "X wins!" << endl;
      }
      else if (turn2 == 1)
      {
        cout << "O wins!" << endl;
      }

      // output of winning field
      for (x = 0; x < 3; x++)
      {
        for (y = 0; y < 3; y++)
        {
          if ((field[0][0] == 'x') && (field[1][0] == 'x') && (field[2][0] == 'x'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 0) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'x') && (field[0][1] == 'x') && (field[0][2] == 'x'))
          {
            if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 0 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'x') && (field[1][1] == 'x') && (field[2][2] == 'x'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'x') && (field[1][1] == 'x') && (field[2][0] == 'x'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 1) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][1] == 'x') && (field[1][1] == 'x') && (field[2][1] == 'x'))
          {
            if ((x == 0 && y == 1) || (x == 1 && y == 1) || (x == 2 && y == 1))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'x') && (field[1][2] == 'x') && (field[2][2] == 'x'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 2) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[1][0] == 'x') && (field[1][1] == 'x') && (field[1][2] == 'x'))
          {
            if ((x == 1 && y == 0) || (x == 1 && y == 1) || (x == 1 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[2][0] == 'x') && (field[2][1] == 'x') && (field[2][2] == 'x'))
          {
            if ((x == 2 && y == 0) || (x == 2 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'o') && (field[1][0] == 'o') && (field[2][0] == 'o'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 0) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'o') && (field[0][1] == 'o') && (field[0][2] == 'o'))
          {
            if ((x == 0 && y == 0) || (x == 0 && y == 1) || (x == 0 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][0] == 'o') && (field[1][1] == 'o') && (field[2][2] == 'o'))
          {
            if ((x == 0 && y == 0) || (x == 1 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'o') && (field[1][1] == 'o') && (field[2][0] == 'o'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 1) || (x == 2 && y == 0))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][1] == 'o') && (field[1][1] == 'o') && (field[2][1] == 'o'))
          {
            if ((x == 0 && y == 1) || (x == 1 && y == 1) || (x == 2 && y == 1))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[0][2] == 'o') && (field[1][2] == 'o') && (field[2][2] == 'o'))
          {
            if ((x == 0 && y == 2) || (x == 1 && y == 2) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[1][0] == 'o') && (field[1][1] == 'o') && (field[1][2] == 'o'))
          {
            if ((x == 1 && y == 0) || (x == 1 && y == 1) || (x == 1 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
          else if ((field[2][0] == 'o') && (field[2][1] == 'o') && (field[2][2] == 'o'))
          {
            if ((x == 2 && y == 0) || (x == 2 && y == 1) || (x == 2 && y == 2))
            {
              cout << "(" << field[x][y] << ")";
            }
            else
            {
              cout << "[" << field[x][y] << "]";
            }
          }
        }
        cout << endl;
      }
    }

    // protection against incorrect input
    else
    {
      cout << "Something is wrong!" << endl;
    }
  }

  // protection against incorrect input
  else
  {
    cout << "Something is wrong!" << endl;
  }
  return 0;
}
