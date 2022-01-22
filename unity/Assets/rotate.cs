using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;
enum Direction { right, left, up, down }

public class rotate : MonoBehaviour
{
    [SerializeField]
    private float speed = 50f;
    [SerializeField]
    Direction direction = Direction.left;

    [DllImport("__Internal")]
    private static extern void Hello();

    void Start()
    {
        Hello();
    }

    void Update()
    {
        Vector3 vector = Vector3.zero;
        switch (direction)
        {
            case Direction.left:
                vector = Vector3.up;
                break;
            case Direction.right:
                vector = Vector3.down;
                break;
            case Direction.up:
                vector = Vector3.left;
                break;
            case Direction.down:
                vector = Vector3.right;
                break;
        }
        transform.Rotate(vector * Time.deltaTime * speed);
    }
}
